const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const upload = require("../config/multer.config");
const { doubleCsrfProtection } = require("../middleware/csrf.middleware");
const validatedData = require("../validation/product.validation");

router.post('/create-product', authMiddleware, doubleCsrfProtection, validatedData.validatedProductSchema, upload.single('photo'), productController.create_product);
router.post('/description/:id', authMiddleware, doubleCsrfProtection, validatedData.validatedProductDescriptionSchema, upload.array('photo', 10), productController.add_description);

module.exports = router;