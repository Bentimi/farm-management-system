const crypto = require("crypto");
const AppError = require("../utils/AppError.utils");

const CSRF_SECRET = process.env.CSRF_SECRET || 'fallback-secret-development';

function generateHmac(message) {
    return crypto.createHmac("sha256", CSRF_SECRET).update(message).digest("hex");
}

function generateToken(req, res) {
    const randomValue = crypto.randomBytes(32).toString("hex");
    const hmac = generateHmac(randomValue);
    const csrfToken = `${hmac}.${randomValue}`;

    const isProduction = process.env.NODE_ENV === "production";
    
    res.cookie("x-csrf-token", csrfToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return csrfToken;
}

function doubleCsrfProtection(req, res, next) {
    const ignoredMethods = ["GET", "HEAD", "OPTIONS"];
    if (ignoredMethods.includes(req.method)) {
        return next();
    }

    const csrfCookie = req.cookies["x-csrf-token"];
    const csrfHeader = req.headers["x-csrf-token"];

    if (!csrfCookie || !csrfHeader) {
        return next(new AppError("Missing CSRF token", 403));
    }

    if (csrfCookie !== csrfHeader) {
        return next(new AppError("Invalid CSRF token", 403));
    }

    const parts = csrfCookie.split(".");
    if (parts.length !== 2) {
        return next(new AppError("Malformed CSRF token", 403));
    }

    const [hmac, randomValue] = parts;

    const expectedHmac = generateHmac(randomValue);
    if (hmac !== expectedHmac) {
        return next(new AppError("Tampered CSRF token", 403));
    }

    next();
}

module.exports = {
   doubleCsrfProtection, 
   generateToken
};
