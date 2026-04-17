const express = require("express");
const router = express.Router();
const paymentController = require("../controller/payment.controller");
const paymentService = require("../services/payment.service")
const { authMiddleware } = require("../middleware/auth.middleware");
const { doubleCsrfProtection } = require("../middleware/csrf.middleware");
const validatedData = require("../validation/payment.validation");

router.post('/create-payment-link', authMiddleware, doubleCsrfProtection, validatedData.validatedLink, paymentController.create_redirectUrl);
router.post('/flutterwave-webhook', paymentService.flutterwaveWebhook);

module.exports = router;