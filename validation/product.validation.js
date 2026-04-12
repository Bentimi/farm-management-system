const joi = require("joi");
const { validate } = require("../middleware/validateData.middlieware");

const productSchema = joi.object({
    name: joi.string().trim().required(),
    price: joi.number().positive().required(),
    newPrice: joi.number().positive().optional(),
    quantity: joi.number().integer().positive().min(1).required(),
    categoryId: joi.string().trim().required(),
    coverDescription: joi.string().trim().optional(),
    draft: joi.boolean().optional(),
    approved: joi.string().valid("pending", "approved", "rejected", "review").optional()
})

const productImageSchema = joi.object({
    photo: joi.any()
    .required()
    .description('Image file')
})

const productDescriptionSchema = joi.object({
    description: joi.string().trim().required(),
})

const DescriptionImagesSchema = joi.object({
    photo: joi.array().items(joi.any().description('Image file')).max(10)
})

const productCategorySchema = joi.object({
    category: joi.string().trim().required()
})

const productApprovalSchema = joi.object({
    approved: joi.string().valid("approved", "rejected", "review").required()
})

const productCartSchema = joi.object({
    quantity: joi.number()
    .integer()
    .positive()
    .min(1)
    .required()
    .messages({
        'number.base': 'Quantity must be a number.',
        'number.min': 'You must add at least 1 item to the cart.',
    })
})

module.exports = {
    validatedProductSchema: validate(productSchema),
    validatedProductImageSchema: validate(productImageSchema),
    validatedProductImages: validate(DescriptionImagesSchema),
    validatedProductDescriptionSchema: validate(productDescriptionSchema),
    validatedProductCategorySchema: validate(productCategorySchema),
    validatedProductApprovalSchema: validate(productApprovalSchema),
    validatedCartSchema: validate(productCartSchema)
}