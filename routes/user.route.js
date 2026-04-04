const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const validatedData =  require("../utils/userDataValidation.utils");
const { doubleCsrfProtection } = require("../middleware/csrf.middleware");
const { authMiddleware } = require("../middleware/auth.middleware");

// Public endpoints
router.post('/create-user', validatedData.validatedUserSchema, userController.create_user);
router.post('/login', validatedData.validatedLoginSchema, userController.login_user);

// Protected endpoints (require CSRF token)
router.post('/logout', authMiddleware, doubleCsrfProtection, userController.logout_user);
router.get('/:id', authMiddleware, doubleCsrfProtection, userController.user_profile);

module.exports = router;