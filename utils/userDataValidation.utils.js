const joi = require("joi");
const { validate } = require("../middleware/validateData.middlieware");

const userSchema = joi.object({
    first_name: joi.string().trim().required(),
    last_name: joi.string().trim().required(),
    email: joi.string().trim().email.required(),
    password: joi.string().trim()
    .min(8)
    .max(30)
    .required()
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])'))
    .messages({
      'string.pattern.base': 'Password must include uppercase, lowercase, number, and a special character (!@#$%^&*)',
    })
})

module.exports = {
    validatedUserSchema: validate(userSchema)
}