const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const validatedData =  require("../utils/userDataValidation.utils")

router.post('/create-user', validatedData.validatedUserSchema, userController.create_user);

module.exports = router;