"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).send({
        success: false,
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
    });
    next();
};
exports.errorMiddleware = errorMiddleware;
