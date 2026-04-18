require("dotenv").config();
const JWT = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const redisClient = require("../lib/redis.client");

const authMiddleware = async (req, res, next) => {
    const accessToken = req.cookies.accessToken || req.headers['authorization']?.split(' ')[1];

    // If access token is valid, proceed
    if (accessToken) {
        try {
            const decoded = JWT.verify(accessToken, process.env.JWT_SECRET);
            req.user = decoded;
            return next();
        } catch (e) {
            // Access token expired — fall through to try refresh
            if (e.name !== 'TokenExpiredError') {
                return res.status(401).json({ status: 'error', message: 'Invalid access token' });
            }
        }
    }

    // Attempt silent refresh using the refresh token cookie
    const oldRefreshToken = req.cookies.refreshToken;
    if (!oldRefreshToken) {
        return res.status(401).json({ status: 'error', message: 'Authentication required' });
    }

    try {
        const userId = await redisClient.get(`refresh_token:${oldRefreshToken}`);

        if (!userId) {
            res.clearCookie('accessToken');
            res.clearCookie('refreshToken');
            return res.status(401).json({ status: 'error', message: 'Session expired. Please log in again.' });
        }

        // Issue new access token only (do NOT rotate refresh token)
        // This prevents race conditions where concurrent requests clear the session!
        const newAccessToken = JWT.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '15m' });

        const isProduction = process.env.NODE_ENV === "production";
        const cookieOptions = {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'none' : 'lax'
        };

        res.cookie('accessToken', newAccessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 });

        req.user = JWT.verify(newAccessToken, process.env.JWT_SECRET);
        next();
    } catch (e) {
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        return res.status(401).json({ status: 'error', message: 'Session expired. Please log in again.' });
    }
}

module.exports = {
    authMiddleware
};
