const AppError = require("../utils/AppError.utils");

function doubleCsrfProtection(req, res, next) {
    const ignoredMethods = ["GET", "HEAD", "OPTIONS"];
    if (ignoredMethods.includes(req.method)) {
        return next();
    }

    // Check for custom header that only our frontend sends
    const requestedWith = req.headers['x-requested-with'];
    if (requestedWith !== 'XMLHttpRequest') {
        return next(new AppError("CSRF validation failed", 403));
    }

    next();
}

function generateToken(req, res) {
    // No longer required for custom header approach, but kept for compatibility
    return "deprecated";
}

module.exports = {
    doubleCsrfProtection,
    generateToken
};
