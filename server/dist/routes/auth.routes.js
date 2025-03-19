"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const async_wrapper_1 = require("../helpers/async-wrapper");
const RequestValidator_1 = __importDefault(require("../validators/RequestValidator"));
const RegisterUserAccountRequest_1 = require("../requests/RegisterUserAccountRequest");
const passport_1 = __importDefault(require("passport"));
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post("/login", (0, async_wrapper_1.asyncWrapper)(auth_controller_1.default.login));
        this.router.post("/signup", RequestValidator_1.default.validate(RegisterUserAccountRequest_1.RegisterUserAccountRequest), (0, async_wrapper_1.asyncWrapper)(auth_controller_1.default.signup));
        this.router.get("/me", passport_1.default.authenticate("jwt", { session: false }), (0, async_wrapper_1.asyncWrapper)(auth_controller_1.default.me));
    }
}
exports.default = AuthRoutes;
