const AppError = require("../utils/AppError.utils");

const errorHandler = (err, _req, res, _next) => {

    if (err instanceof AppError) {
        return res.status(err.status).json({
            success: false,
            message: err.message
        });
    }

const prismaErrors = {
    'P2002' : { status: 409, message: 'Conflict: duplicate entry' },
    'P2025' : { status: 404, message: 'Record not found' },
    'P2003' : { status: 400, message: 'Foreign key constraint failed' }
};

if (err.code === 'EBADCSRFTOKEN') {
    return res.status(403).json({
        success: false,
        message: "Invalid or missing CSRF token"
    });
}

if (prismaErrors[err.code]) {
    return res.status(prismaErrors[err.code].status).json({
        success: false,
        message: prismaErrors[err.code].message,
        ...(process.env.NODE_ENV === 'development' && { detail: err.message })
    });
}

return res.status(500).json({
    success: false,
    message: "Internal server error",
    ...(process.env.NODE_ENV === 'development' && { error: err.message })
});

}

module.exports = { errorHandler };