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

const loginSchema = joi.object({
    credential: joi.string().trim().required(),
    password: joi.string().trim().required()
})

const userUpdateSchema = joi.object({
    first_name: joi.string().trim().required(),
    last_name: joi.string().trim().required(),
    email: joi.string().trim().email.required(),
    phone_number: joi.string().trim().required(),
    gender: joi.string().trim().valid('male', 'female', 'other').required(),
    marital_status: joi.string().trim().valid('single', 'married', 'divorced', 'other').required()
})

const userRoleSchema = joi.object({
    role: joi.string().trim().valid('admin', 'staff', 'user').required()
})

const changePasswordSchema = joi.object({
    current_password: joi.string().trim().required(),
    new_password: joi.string().trim()
    .min(8)
    .max(30)
    .required() 
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])'))
    .messages({
      'string.pattern.base': 'New password must include uppercase, lowercase, number, and a special character (!@#$%^&*)',
    })
})

module.exports = {
    validatedUserSchema: validate(userSchema),
    validatedLoginSchema: validate(loginSchema),
    validatedUpdateSchema: validate(userUpdateSchema),
    validatedRoleSchema: validate(userRoleSchema),
    validatedChangePasswordSchema: validate(changePasswordSchema)
}