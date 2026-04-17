const paymentService = require("../services/payment.service");

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

const flutterwave_webhook = async (req, res, next) => {
    try {

        const result = await paymentService.flutterwaveWebhook(req, res)
        res.success(result, "Webhook received")
    } catch (e) {
        res.status(200).end();
    }
}

module.exports = {
    create_redirectUrl,
    flutterwave_webhook
}