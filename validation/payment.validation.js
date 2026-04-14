const joi = require("joi");
const { validate } = require("../middleware/validateData.middlieware");

const paymentRedirectLink = joi.object({
    url: joi.string().trim().required()
})


module.exports = {
    validatedLink: validate(paymentRedirectLink)
}