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
        console.error("FLW_SECRET_HASH not set");
        return res.status(500).json("Internal server error")
    }

    const signature = req.headers["verif-hash"];
        if(!signature) return res.status(401).json({'message': 'Unauthorized Access'});

    
    if ( !signature || (secretHash !== signature) ) {
        console.error("Invalid Flutterwave signature");
        return res.status(401).json({'message' :'Unauthorized Access'});
    }

    const payload = req.body;
    console.log("Webhook payload:", payload); 

    res.status(200).end();

    const txRef = payload?.data?.tx_ref;

    if (!txRef) {
        console.log("Missing tx_ref");
        return;
    }

   const existingPayment = await prisma.order.findUnique({
        where: {
            txRef
        }
   })

   if (!existingPayment) {
       console.log('Transaction Reference do not exist' )
       return;
   }

    
   if (existingPayment.status === 'successful' || existingPayment.status === 'failed') {
        console.log("Already finalized:", txRef);
        return
   }

   let response = null;
   if (payload.event === 'charge.completed' && payload.data?.status === 'successful') {

        try { 
            response = await axios.get(`https://api.flutterwave.com/v3/transactions/${payload.data.id}/verify`, {
            headers: {
                Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
            }
        });
        } catch (e) {
            console.log("Flutterwave verification failed:", e.message)
        }
    }
    
    if (response) {
    console.log("Webhook Response:", response.data);
    } else {
        console.log("No verification call made");
    }
    

    await prisma.$transaction( async (tx) => {
        await tx.order.update({
        where: {
            txRef
        },
        data: {
            status: 'processing'
        }
    })

    console.log(`
        Status: ${response.data.data.status}
        Total Price: {
           Respose Price => ${response.data.data.amount} 
           Payment Price => ${existingPayment.total_price}
        }
        TNX Ref: {
           Respose Ref => ${response.data.data.tx_ref} 
           Payment Ref => ${existingPayment.txRef}
        }
        `)
        typeof(existingPayment.total_price)
        typeof(response.data.data.amount)
    
    if (
        response?.data?.data?.status === "successful"
        && response?.data?.data?.amount === Number(existingPayment.total_price)
        && response?.data?.data?.tx_ref === existingPayment.txRef ) {

        const updatedOrder = await tx.order.update({
        where: {
            txRef
        },
        data: {
            status: 'successful',
            purchased: true
        }
        })
        
        const carts = await tx.cart.findMany({
            where: {
                orderId: updatedOrder.id
            }
        }) 
        
        await tx.cart.updateMany({
            where: {
                orderId: updatedOrder.id
            },
            data: {
                checked: true
            }
        })

       await tx.productInvoice.createMany({
            data: carts.map(cart =>( {
                cartId: cart.id,
                productPrice: cart.price,
                invoiceUserId: cart.userId
            }))
        })

        console.log(`Payment successful for txRef: ${txRef}`)

    } else {
        await tx.order.update({
            where: {
                txRef
            },
            data: {
                status: 'failed',
                purchased: false
            }
        })

        console.log(`Payment Failed for txRef: ${txRef}`)
    }
    })

    
    } catch (e) {
        console.log('Webhook handler error:', e)
        // return res.status(500).json('Internal server error')
    }

}

module.exports = {
    createRedirectUrl,
    flutterwaveWebhook
}