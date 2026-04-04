require("dotenv").config();
const JWT = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const userService = require("../services/user.service");
const redisClient = require("../lib/redis.client");
const { generateToken } = require("../middleware/csrf.middleware");

const create_user = async (req, res, next) => {
    try {
        const data = req.body;
        const user = await userService.createUser(data);
        res.status(201).json({
            status: 'success',
            message: 'User successfully created',
            user
        });
    } catch (e) {
        next(e);
    }
}

const login_user = async (req, res, next) => {
    try {
        const data = req.body;
        const { user } = await userService.loginUser(data);

        // Short-lived access token
        const accessToken = JWT.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });
        
        // Long-lived refresh token
        const refreshToken = uuidv4();
        
        // Store in Redis (7 days expiration)
        const SEVEN_DAYS = 7 * 24 * 60 * 60;
        await redisClient.set(`refresh_token:${refreshToken}`, String(user.id), { EX: SEVEN_DAYS });
        await redisClient.sAdd(`user:${user.id}:tokens`, refreshToken);

        const isProduction = process.env.NODE_ENV === "production";
        const cookieOptions = {
            httpOnly: true,
            secure: isProduction,
            sameSite: 'strict'
        };

        res.cookie('accessToken', accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 });
        res.cookie('refreshToken', refreshToken, { ...cookieOptions, maxAge: SEVEN_DAYS * 1000 });

        // Generate CSRF token automatically at login
        generateToken(res, req);

        res.success({ user, accessToken }, "Login successful");
    } catch (e) {
        next(e);
    }
}

const logout_user = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (refreshToken) {
            const userId = await redisClient.get(`refresh_token:${refreshToken}`);
            if (userId) {
                await redisClient.del(`refresh_token:${refreshToken}`);
                await redisClient.sRem(`user:${userId}:tokens`, refreshToken);
            }
        }
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.clearCookie('x-csrf-token');
        res.success(null, "Logout successful");
    } catch (e) {
        next(e);
    }
}


const user_profile = async (req, res, next) => {
    try {

        const userId = req.user.id;
        const targetId = req.params.id;
        const profile = await userService.userProfile(userId, targetId);
        res.success(profile, "User profile retrieved successfully");

    } catch (e) {
        next(e);
    }
}

module.exports = {
    create_user,
    login_user,
    logout_user,
    user_profile
};