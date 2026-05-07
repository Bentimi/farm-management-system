const paymentService = require("../services/payment.service");
const { prisma } = require("../lib/prisma");
const axios = require("axios");

const create_redirectUrl = async (req, res, next) => {

    try {

        const userId = req.user.id;
        const data = req.body;
        // console.log(data)
        const result = await paymentService.createRedirectUrl(userId, data);
        // console.log(result)
        res.success(result, "Payment link created successfully")

    } catch (e) {
        console.log(e)
        next(e);
    }

}

/**
 * GET /payment/status?reference=<tx_ref>
 *      /payment/status?tx_ref=<tx_ref>
 *      /payment/status?transaction_id=<flw_transaction_id>
 *      /payment/status?order_id=<internal_order_id>
 *
 * Always returns the current order status so the frontend can
 * detect any non-pending state and redirect accordingly.
 */
const getPaymentStatus = async (req, res, next) => {
    try {
        const { reference, tx_ref, transaction_id, order_id } = req.query;

        const txRef = reference || tx_ref;

        let order = null;

        if (txRef) {
            order = await prisma.order.findUnique({
                where: { txRef },
                select: { id: true, status: true, txRef: true, purchased: true }
            });
        }

        if (!order && order_id) {
            order = await prisma.order.findUnique({
                where: { id: order_id },
                select: { id: true, status: true, txRef: true, purchased: true }
            });
        }

        if (!order) {
            return res.status(404).json({
                status: 'error',
                message: 'Order not found'
            });
        }

        // ── Active fallback: if still pending + FW transaction_id supplied, query FW directly ──
        // This handles the race where the webhook hasn't fired yet.
        if (order.status === 'pending' && transaction_id) {
            try {
                const fwRes = await axios.get(
                    `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`,
                    { headers: { Authorization: `Bearer ${process.env.FLW_SECRET_KEY}` } }
                );

                const fwData = fwRes.data?.data;

                if (fwData?.status === 'successful' && fwData?.tx_ref === order.txRef) {
                    // Use shared logic to finalize the order, clear cart, update stock, etc.
                    await paymentService.finalizeOrder(order.txRef, 'successful');
                    order = { ...order, status: 'successful', purchased: true };
                    console.log(`getPaymentStatus: active verify → successful for ${order.txRef}`);
                } else if (fwData?.status === 'failed') {
                    await paymentService.finalizeOrder(order.txRef, 'failed');
                    order = { ...order, status: 'failed', purchased: false };
                    console.log(`getPaymentStatus: active verify → failed for ${order.txRef}`);
                }
                // If FW says 'pending' / anything else, leave DB as-is and return current status
            } catch (e) {
                // Non-fatal: fall through and return the current DB status
                console.warn('getPaymentStatus: FW active verify failed:', e.message);
            }
        }

        return res.status(200).json({
            status: 'success',
            data: {
                order_status: order.status,
                status: order.status,
                txRef: order.txRef,
                purchased: order.purchased
            }
        });
    } catch (e) {
        console.error('getPaymentStatus error:', e);
        next(e);
    }
};

module.exports = {
    create_redirectUrl,
    getPaymentStatus,
};