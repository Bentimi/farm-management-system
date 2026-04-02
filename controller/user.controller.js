require("dotenv").config();
const JWT = require("jsonwebtoken");
const userService = require("../services/user.service");


const create_user = async (req, res, next) => {
    try {
        
        const data = req.body;

        const user = await userService.createUser(data)
        res.status(201).json({
            status: 'success',
            message: 'User successfully created',
            user
        })

    } catch (e) {
        next(e);
    }
}

module.exports = {
    create_user
}