const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const upload = require("../config/multer.config");
const { doubleCsrfProtection } = require("../middleware/csrf.middleware");
const validatedData = require("../validation/product.validation");

router.post('/create-product', authMiddleware, doubleCsrfProtection, validatedData.validatedProductSchema, upload.single('photo'), productController.create_product);
router.put('/create-product', authMiddleware, doubleCsrfProtection, validatedData.validatedProductSchema, upload.single('photo'), productController.update_product);
router.post('/description/:id', authMiddleware, doubleCsrfProtection, validatedData.validatedProductDescriptionSchema, upload.array('photo', 10), productController.add_description);
router.put('/description/:productId/:descriptionId', authMiddleware, doubleCsrfProtection, validatedData.validatedProductDescriptionSchema, upload.array('photo', 10), productController.update_product_description);
router.post('/add-category', authMiddleware, doubleCsrfProtection, validatedData.validatedProductCategorySchema, productController.create_category);
router.patch('/product-approval/:id', authMiddleware, doubleCsrfProtection, productController.product_approval);
router.patch('/product-status/:id', authMiddleware, doubleCsrfProtection, validatedData.validatedProductApprovalSchema, productController.product_publish);
router.post('/add-to-cart/:id', authMiddleware, doubleCsrfProtection, validatedData.validatedCartSchema, productController.add_to_cart);
router.put('/edit-cart-item/:id', authMiddleware, doubleCsrfProtection, validatedData.validatedCartSchema, productController.edit_cartItem);
router.delete('/delete-cart-item/:id', authMiddleware, doubleCsrfProtection, productController.delete_cartItem);

module.exports = router;