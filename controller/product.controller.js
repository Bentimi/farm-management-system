const productService = require("../services/product.service");

const create_product = async (req, res, next) => {
    try {

        const userId = req.user.id;
        const data = req.body;
        // const file = req.file;
        const file = req.file; // Added

        // const product = await productService.createProduct(userId, data);
        const product = await productService.createProduct(userId, data, file);
        res.status(201).json({
            status: "success",
            message: "Product created successfully",
            data: product
        })

    } catch (e) {
        console.log(e)
        next(e);
    }
}

const product_image = async (req, res, next) => {
    try {

        const userId = req.user.id;
        const productId = req.params.id;
        const file = req.file;

        const product = await productService.uploadProductImage(file, productId, userId);
        res.status(201).json({
            status: "success",
            message: "Product image uploaded successfully",
            data: product
        })

    } catch (e) {
        console.log(e)
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
        console.log(e);
        next(e);
    }
}

const add_description = async (req, res, next) => {
    try {

        const userId = req.user.id;
        const productId = req.params.id;
        const data = req.body;
        const files = req.files || []; // Added for bulk uploads

        if (data.retainedImages && typeof data.retainedImages === 'string') {
            try {
                data.retainedImages = JSON.parse(data.retainedImages);
            } catch (e) {
                // If it fails to parse, default it or ignore
                data.retainedImages = [];
            }
        }

        // const product = await productService.addDescription(userId, productId, data);
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

        const updated = await productService.updateProductDescription(userId, productId, descriptionId, data);
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

const get_products =  async (req, res, next) => {
    try {

        const userId = req.user.id;
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const products = await productService.getProducts(userId, page, pageSize);
        res.success(products, "Products retrieved successfully")
    } catch(e) {
        next(e);
    }
}

const get_categories = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const categories = await productService.getCategories(userId);
        res.success(categories, "Categories retrieved successfully")
    } catch(e) {
        next(e);
    }
}

const upload_productImages = async (req, res, next) => {
    try {

        const userId = req.user.id;
        const files = req.files;
        const descriptionId = req.params.id;

        const result = await productService.uploadProductImages(userId, files, descriptionId)

        res.success(result, "Images uploaded successfully")

    } catch (e) {
        next(e);
    }
}

const verified_products = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const page = parseInt(req.params.page) || 1;
        const pageSize = parseInt(req.params.pageSize) || 10;
        const categories = await productService.verifiedProducts(userId, page, pageSize);
        res.success(categories, "Products retrieved successfully")
    } catch(e) {
        console.log(e);
        next(e);
    }
}

module.exports = {
    create_product,
    product_image,
    update_product,
    add_description,
    update_product_description,
    create_category,
    product_approval,
    product_publish,
    add_to_cart,
    edit_cartItem,
    delete_cartItem,
    get_cart,
    get_products,
    get_categories,
    upload_productImages,
    verified_products
}