const express = require("express");
const router = express.Router();
const orderController = require("../controller/order.controller");
const { doubleCsrfProtection } = require("../middleware/csrf.middleware");
const { authMiddleware } = require("../middleware/auth.middleware");

router.get('/my-orders', authMiddleware, doubleCsrfProtection, orderController.get_orders);

module.exports = router;
