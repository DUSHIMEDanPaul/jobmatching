"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const job_applications_controller_1 = __importDefault(require("../controllers/job-applications.controller"));
const async_wrapper_1 = require("../helpers/async-wrapper");
class JobApplicationsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post("/:id/apply", (0, async_wrapper_1.asyncWrapper)(job_applications_controller_1.default.applyForJob));
        this.router.get("/:id/applications", (0, async_wrapper_1.asyncWrapper)(job_applications_controller_1.default.getJobApplications));
        this.router.get("/applications", (0, async_wrapper_1.asyncWrapper)(job_applications_controller_1.default.getUserApplications));
        this.router.put("/applications/:id", (0, async_wrapper_1.asyncWrapper)(job_applications_controller_1.default.updateJobApplication));
    }
}
exports.default = JobApplicationsRoutes;
