const paymentService = rerquire("../services/payment.service");

const create_redirectUrl = async (req, res, next) => {

    try {

        const userId = req.user.id;
        const data = req.body;

        const result = await paymentService.create_redirectUrl(userId, data);

        res.success(result, "Payment link created successfully")

    } catch (e) {
        next(e);
    }

}

module.exports = {
    create_redirectUrl
}