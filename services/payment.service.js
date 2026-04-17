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
    
        const totalAmount = Number(userCart._sum.total_price) * 1.075
    
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

        const createorder = await tx.order.create({
            data: {
                status: 'pending',
                orderedUserId: userAuth.id,
                txRef: txRef,
                total_price: totalAmount
            }
        })

        const carts = await tx.cart.updateMany({
            where: {
                userId: userAuth.id,
                orderId: null
            },
            data: {
                orderId: createorder.id
            }  
        })
    })
    return paymentLink
}


const flutterwaveWebhook = async (req, res) => {

    try {
        const secretHash = process.env.FLW_SECRET_HASH;
    if (!secretHash) {
        console.error("FLW_WEBHOOK_SECRET not set");
        return res.status(500).json("Internal server error")
    }

    const signature = req.headers["verif-hash"];
        if(!signature) return res.status(401).json({'message': 'Unauthorized Access'});

    
    if ((secretHash !== signature) || !signature) {
        console.error("Invalid Flutterwave signature");
        return res.status(401).json({'message' :'Unauthorized Access'});
    }

    const payload = req.body;
    console.log(`Webhook payload ${payload}`)

    // const existingEvent = await PaymentEvent.where({id: payload.id}).find();
    //     if (existingEvent.status === payload.status) {
    //         // The status hasn't changed,
    //         // so it's probably just a duplicate event
    //         // and we can discard it
    //         res.status(200).json().end();
    //     }

    //     // Record this event
    //     await PaymentEvent.save(payload);

    // It's a good idea to log all received events.
    // console.log(payload);
    // Do something (that doesn't take too long) with the payload
    // const response = await flw.Transaction.verify({id: payload.id});
    if (
        response.data.status === "successful"
        && response.data.amount === expectedAmount
        && response.data.currency === expectedCurrency
        && response.data.tx_ref === expectedReference ) {
        // Success! Confirm the customer's payment
    } else {
        // Inform the customer their payment was unsuccessful
    }
    
    
    // const response = await axios.get(`https://api.flutterwave.com/v3/transactions/288200108/verify`) {

    // }
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal server error')
    }

}

module.exports = {
    createRedirectUrl,
    flutterwaveWebhook
}