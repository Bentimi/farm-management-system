const joi = require("joi");
const { validate } = require("../middleware/validateData.middlieware");

const productSchema = joi.object({
    name: joi.string().trim().required(),
    price: joi.number().positive().required(),
    quantity: joi.number().integer().positive().required(),
    description: joi.string().trim().required(),
    photo: joi.any()
    .required()
    .description('Image file')
})

const productDescriptionSchema = joi.object({
    description: joi.string().trim().required(),
    photo: joi.array().items(joi.any().description('Image file')).max(10)
})

const productCategorySchema = joi.object({
    category: joi.string().trim().required()
})

const productApprovalSchema = joi.object({
    approved: joi.string().valid("approved", "rejected", "review").required()
})

module.exports = {
    validatedProductSchema: validate(productSchema),
    validatedProductDescriptionSchema: validate(productDescriptionSchema),
    validatedProductCategorySchema: validate(productCategorySchema),
    validatedProductApprovalSchema: validate(productApprovalSchema)
}