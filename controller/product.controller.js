const productService = require("../services/product.service");

const create_product = async (req, res, next) => {
    try {

        const userId = req.user.id;
        const data = req.body;
        const file = req.file;

        const product = await productService.createProduct(userId, data, file);
        res.status(201).json({
            status: "success",
            message: "Product created successfully",
            data: product
        })

    } catch (e) {
        next (e);
    }
}

const update_product = async (req, res, next) => {
    try {

        const userId = req.user.id;
        const targetId = req.params.id;
        const data = req.body;
        const file = req.file;

        const product = await productService.updateProduct(userId, targetId, data, file);
        res.success(
            product, 
            "Product updated successfully"
        );

    } catch (e) {
        next(e);
    }
}

const add_description = async (req, res, next) => {
    try {

        const userId = req.user.id;
        const productId = req.params.id;
        const data = req.body;
        const files = req.files;

        const product = await productService.addDescription(userId, productId, data, files);
        res.success(
            product, 
            "Product description added successfully");

    } catch (e) {
        next (e);
    }
}

const update_product_description = async (req, res, next) => {
    try {

        const userId = req.user.id;
        const productId = req.params.productId;
        const descriptionId = req.params.descriptionId;
        const data = req.body;
        const files = req.files;

        const updated = await productService.updateProductDescription(userId, productId, descriptionId, data, files);
        res.success(updated, "Product description updated successfully");

    } catch (e) {
        next(e);
    }
}

module.exports = {
    create_product,
    update_product,
    add_description,
    update_product_description
}