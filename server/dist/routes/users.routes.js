"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const async_wrapper_1 = require("../helpers/async-wrapper");
class UserManagementRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/user", (0, async_wrapper_1.asyncWrapper)(users_controller_1.default.getUserPersonal));
        this.router.get("/:id", (0, async_wrapper_1.asyncWrapper)(users_controller_1.default.getUser));
        this.router.put("/:id", (0, async_wrapper_1.asyncWrapper)(users_controller_1.default.updateUser));
    }
}
exports.default = UserManagementRoutes;
