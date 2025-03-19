"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jobs_controller_1 = __importDefault(require("../controllers/jobs.controller"));
const async_wrapper_1 = require("../helpers/async-wrapper");
class JobsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", (0, async_wrapper_1.asyncWrapper)(jobs_controller_1.default.getJobs));
        this.router.post("/", (0, async_wrapper_1.asyncWrapper)(jobs_controller_1.default.createJob));
        this.router.get("/:id", (0, async_wrapper_1.asyncWrapper)(jobs_controller_1.default.getJob));
        this.router.put("/:id", (0, async_wrapper_1.asyncWrapper)(jobs_controller_1.default.updateJob));
        this.router.delete("/:id", (0, async_wrapper_1.asyncWrapper)(jobs_controller_1.default.deleteJob));
    }
}
exports.default = JobsRoutes;
