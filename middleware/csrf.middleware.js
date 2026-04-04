const { doubleCsrf } = require("csrf-csrf");

const doubleCsrfOptions = {
    getSecret: () => process.env.CSRF_SECRET || 'fallback-secret-development', 
    cookieName: "x-csrf-token",
    cookieOptions: {
        sameSite: "strict",
        path: "/",
        secure: process.env.NODE_ENV === "production",
    },
    size: 64,
    ignoredMethods: ["GET", "HEAD", "OPTIONS"],
    getTokenFromRequest: (req) => req.headers["x-csrf-token"],
};

const {
    invalidCsrfTokenError,
    generateToken,
    validateRequest,
    doubleCsrfProtection,
} = doubleCsrf(doubleCsrfOptions);

module.exports = {
   doubleCsrfProtection, 
   generateToken,
   invalidCsrfTokenError
};
