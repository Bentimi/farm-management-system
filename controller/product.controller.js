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
        next(e);
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
        next(e);
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

const create_category = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const data = req.body;

        const category = await productService.createCategory(userId, data);
        res.status(201).json({
            status: "success",
            message: "Category created successfully",
            data: category
        })
    } catch (e) {
        next(e);
    }
 }

 const product_approval = async (req, res, next) => {
    try {

        const userId = req.user.id;
        const productId = req.params.id;
        const data = req.body;

        const product = await productService.productApproval(userId, productId, data);

        let msg
        if (product.approved === "approved" ) {
            msg = "Product approved";
        } else if (product.approved === "review") {
            msg = "Product under review";
        } else if (product.approved === "pending") {
            msg = "Product status on pending";
        } else {
            msg = "Product rejected";
        }


        res.success(product, msg)

    } catch (e) {
        next(e);
    }
 }

 const product_publish = async (req, res, next) => {
    try {

        const userId = req.user.id;
        const productId = req.params.id;

        const product = await productService.productPublish(userId, productId);

        let msg;

        if (product.draft) {
            msg = "Product successfully published";
        } else {
            msg = "Product successfully saved to draft";
        }

        res.success(product, msg)


    } catch (e) {
        next(e);
    }
 }

 const add_to_cart = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const productId = req.params.id
        const data = req.body;

        const cart = await productService.addToCart(userId, productId, data);
        res.status(201).json({
            status: "success",
            message: "Product added to cart successfully",
            data: cart
            
        });

    } catch (e) {
        next(e);
    }
 }  

 const edit_cartItem = async (req, res, next) => {
    try {

        const userId = req.user.id;
        const cartId = req.params.id;
        const data = req.body;

        const cart = await productService.editCartItem(userId, cartId, data);

        res.success(cart, "Cart successfully edited")

    } catch (e) {
        next(e);
    }
 }

const delete_cartItem = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const cartId = req.params.id;
        const result = await productService.deleteCartItem(userId, cartId);

        res.success(result, "Cart item successfully deleted")
    } catch (e) {
        next(e);
    }
}

const get_cart = async (req, res, next) => {
    try {
        const userId = req.user.id;

        const cart = await productService.getCart(userId);
        res.success(cart, "Cart retrieved successfully")

    } catch (e) {
        next(e);
    }
}

module.exports = {
    create_product,
    update_product,
    add_description,
    update_product_description,
    create_category,
    product_approval,
    product_publish,
    add_to_cart,
    edit_cartItem,
    delete_cartItem,
    get_cart
}