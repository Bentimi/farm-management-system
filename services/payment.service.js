require("dotenv").config();
const { prisma } = require("../lib/prisma");
const AppError = require("../utils/AppError.utils");
const axios = require("axios");                                                         
const Flutterwave = require('flutterwave-node-v3');
const { transactionId } = require("../utils/transactionNumber.utils");


const createRedirectUrl = async (userId, data) => {

    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401)
    }

    if (!userAuth.active) {
        throw new AppError("Unauthorized user", 401)
    }

    if (!data.url) {
        throw new AppError("Redirect Url do not exist", 400)
    }

    const existingCart = await prisma.cart.findMany({
        where: {
            userId: userAuth.id,
            checked: false
        },
        include: {
            product: true
        }
    })

     await Promise.all(
        existingCart.map(item => {
            const actualPrice = item.product.newPrice ?? item.product.price;
            const computedTotal = Number(actualPrice) * item.quantity;

            if (
                Number(item.price) !== Number(actualPrice) ||
                Number(item.total_price) !== computedTotal
            ) {
                return prisma.cart.update({
                    where: { id: item.id },
                    data: {
                        price: actualPrice,
                        total_price: computedTotal
                    }
                });
            }

            return Promise.resolve();
        })
    );

        const userCart = await prisma.cart.aggregate({
            where:{
                userId: userAuth.id,
                checked: false
            },
            _sum: {
                total_price: true
            }
        })
        
        const subtotal = Number(userCart._sum.total_price);

        const taxRate = 0.075;
        const tax = subtotal * taxRate;
        const totalAmount = subtotal + tax
    
        if (totalAmount <= 0) {
            throw new AppError("Cart is empty", 400)
        }
        
        const txRef = transactionId();
        let paymentLink;
    
    try {
        const response = await axios.post(`https://api.flutterwave.com/v3/payments`,
        {
            tx_ref: txRef,
            amount: totalAmount,
            currency: 'NGN',
            redirect_url: data.url,
            customer: {
                email: userAuth.email,
                name: `${userAuth.first_name} ${userAuth.last_name}`,
                phonenumber: userAuth.phone_number,
            },
            customizations: {
                title: 'Agritonix Standard Payment',
            },   
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
    }
        )      

    paymentLink = response.data?.data?.link

    if (!paymentLink) {
        throw new AppError("Unable to generate payment link", 500);
    }


    } catch (e) {
        console.log(e)
        throw new AppError("Payment initialization failed", 500);
    }


    await prisma.$transaction(async (tx) => {

        const existingOrder = await tx.order.findFirst({
            where: {
                 orderedUserId: userAuth.id,
                 purchased: false
            }
        })

        let createOrder;

        if (existingOrder) {
            createOrder = await tx.order.update({
                where: {
                    id: existingOrder.id
                },
                data: {
                    status: 'pending',
                    txRef: txRef,
                    total_price: totalAmount,
                    taxFee: tax
                }
            })
        } else {
            createOrder = await tx.order.create({
                data: {
                    status: 'pending',
                    orderedUserId: userAuth.id,
                    txRef: txRef,
                    total_price: totalAmount,
                    taxFee: tax
               }
            })
        }


        const carts = await tx.cart.updateMany({
            where: {
                userId: userAuth.id,
                orderId: null
            },
            data: {
                orderId: createOrder.id
            }  
        })
    })
    return paymentLink
}


const finalizeOrder = async (txRef, status) => {
    const existingPayment = await prisma.order.findUnique({ where: { txRef } });
    if (!existingPayment) return;

    if (existingPayment.status === 'successful' || existingPayment.status === 'failed') {
        return;
    }

    await prisma.$transaction(async (tx) => {
        if (status === 'successful') {
            await tx.order.update({
                where: { txRef },
                data: { 
                    status: 'successful', 
                    purchased: true, 
                    verifiedAt: new Date() 
                }
            });

            const carts = await tx.cart.findMany({
                where: { orderId: existingPayment.id },
                include: { product: true }
            });

            await tx.cart.updateMany({
                where: { orderId: existingPayment.id },
                data: { checked: true }
            });

            for (const cart of carts) {
                if (cart.product && cart.quantity > 0) {
                    await tx.product.update({
                        where: { id: cart.productId },
                        data: { quantity: { decrement: cart.quantity } }
                    });
                }
            }

            await tx.productInvoice.createMany({
                data: carts.map(cart => ({
                    cartId: cart.id,
                    productPrice: cart.price,
                    invoiceUserId: cart.userId
                }))
            });
        } else {
            await tx.order.update({
                where: { txRef },
                data: { status: 'failed', purchased: false, verifiedAt: new Date() }
            });
        }
    });
};


const flutterwaveWebhook = async (req, res) => {

    try {
        const secretHash = process.env.FLW_SECRET_HASH;
        if (!secretHash) {
            console.error("FLW_SECRET_HASH not set");
            return res.status(500).json("Internal server error");
        }

        const signature = req.headers["verif-hash"];
        if (!signature || secretHash !== signature) {
            console.error("Invalid Flutterwave signature");
            return res.status(401).json({ message: 'Unauthorized Access' });
        }

        const payload = req.body;
        console.log("Webhook payload:", JSON.stringify(payload, null, 2));


        res.status(200).end();

        const txRef = payload?.data?.tx_ref;
        if (!txRef) {
            console.log("Webhook: missing tx_ref, skipping.");
            return;
        }

        let verifiedSuccessful = false;

        if (payload.event === 'charge.completed' && payload.data?.status === 'successful') {
            try {
                const fwRes = await axios.get(
                    `https://api.flutterwave.com/v3/transactions/${payload.data.id}/verify`,
                    { headers: { Authorization: `Bearer ${process.env.FLW_SECRET_KEY}` } }
                );

                const fwData = fwRes.data?.data;
                console.log('Webhook FW verify response:', JSON.stringify(fwData, null, 2));

                const existingPayment = await prisma.order.findUnique({ where: { txRef } });
                if (!existingPayment) return;

                const amountMatch = Math.abs(Number(fwData?.amount) - Number(existingPayment.total_price)) < 0.01;

                verifiedSuccessful = (
                    fwData?.status === 'successful'
                    && amountMatch
                    && fwData?.tx_ref === existingPayment.txRef
                );
            } catch (e) {
                console.error('Webhook: Flutterwave verification request failed:', e.message);
            }
        }

        await finalizeOrder(txRef, verifiedSuccessful ? 'successful' : 'failed');
        console.log(`Webhook: processed ${txRef} as ${verifiedSuccessful ? 'successful' : 'failed'}`);

    } catch (e) {
        console.error('Webhook handler error:', e);
    }
}

module.exports = {
    createRedirectUrl,
    finalizeOrder,
    flutterwaveWebhook
}