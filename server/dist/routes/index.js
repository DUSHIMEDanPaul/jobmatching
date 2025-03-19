"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_routes_1 = __importDefault(require("./users.routes"));
const jobs_routes_1 = __importDefault(require("./jobs.routes"));
const job_applications_routers_1 = __importDefault(require("./job-applications.routers"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const http_status_codes_1 = require("http-status-codes");
const ApiError_1 = require("../errors/ApiError");
const auth_middleware_1 = require("../middlewares/auth.middleware");
class Routes {
    constructor(app) {
        app.use("/api/v1/auth", new auth_routes_1.default().router);
        app.use("/api/v1/jobs", auth_middleware_1.authMiddleware, new jobs_routes_1.default().router);
        app.use("/api/v1/users", auth_middleware_1.authMiddleware, new users_routes_1.default().router);
        app.use("/api/v1/job", auth_middleware_1.authMiddleware, new job_applications_routers_1.default().router);
        app.get("/", (req, res) => {
            res.status(http_status_codes_1.StatusCodes.OK).send(`⚡️[Server]: Server is running!`);
        });
        app.get("/health", (req, res) => {
            res.status(http_status_codes_1.StatusCodes.OK).send(`⚡️[Server]: Server is running!`);
        });
        app.use("*", (req, res, next) => {
            const error = new ApiError_1.ApiError(http_status_codes_1.StatusCodes.NOT_FOUND, `🔍[Server]: Route not found: ${req.originalUrl}`);
            next(error);
        });
    }
}
exports.default = Routes;
