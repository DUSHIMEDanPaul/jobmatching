"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const http_status_codes_1 = require("http-status-codes");
const ApiError_1 = require("./ApiError");
class BadRequestError extends ApiError_1.ApiError {
    constructor(message, errors) {
        super(http_status_codes_1.StatusCodes.BAD_REQUEST, message, errors);
    }
}
exports.BadRequestError = BadRequestError;
