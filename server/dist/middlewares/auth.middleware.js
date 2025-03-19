"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const passport_1 = __importDefault(require("passport"));
const http_status_codes_1 = require("http-status-codes");
const authMiddleware = (req, res, next) => {
    passport_1.default.authenticate("jwt", function (err, user, info) {
        if (err)
            return next(err);
        if (!user)
            return res
                .status(http_status_codes_1.StatusCodes.UNAUTHORIZED)
                .json({ message: "Unauthorized" });
        req.user = user;
        next();
    })(req, res, next);
};
exports.authMiddleware = authMiddleware;
