const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const validatedData =  require("../validation/user.validation");
const { doubleCsrfProtection } = require("../middleware/csrf.middleware");
const { authMiddleware } = require("../middleware/auth.middleware");


router.post('/create-user', validatedData.validatedUserSchema, userController.create_user);
router.post('/login', validatedData.validatedLoginSchema, userController.login_user);

router.post('/logout', authMiddleware, doubleCsrfProtection, userController.logout_user);
router.put('/change-password', authMiddleware, doubleCsrfProtection, validatedData.validatedChangePasswordSchema, userController.change_password);
router.get('/all-users', authMiddleware, doubleCsrfProtection, userController.get_users);
router.patch('/active-status/:id', authMiddleware, doubleCsrfProtection, userController.userActive_status);
router.put('/:id', authMiddleware, doubleCsrfProtection, validatedData.validatedUpdateSchema, userController.update_user);
router.get('/:id', authMiddleware, doubleCsrfProtection, userController.user_profile);
router.put('/role/:id', authMiddleware, doubleCsrfProtection, validatedData.validatedRoleSchema, userController.role_allocation);

module.exports = router;