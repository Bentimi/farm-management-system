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

module.exports = {
    create_product
}