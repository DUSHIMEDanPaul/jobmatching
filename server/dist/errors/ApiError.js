"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(statusCode, message, rawErrors) {
        super(message);
        this.statusCode = statusCode;
        if (rawErrors) {
            this.rawErrors = rawErrors;
        }
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.ApiError = ApiError;
