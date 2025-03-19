"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const seeders_1 = __importDefault(require("./seeders"));
const error_middleware_1 = require("./middlewares/error.middleware");
const passport_1 = __importDefault(require("passport"));
class Application {
    constructor() {
        this.server = (0, express_1.default)();
        this.environment();
        this.database();
        this.middlewares();
        this.passport();
        this.routes();
        this.initDirectories();
    }
    environment() {
        dotenv_1.default.config();
    }
    middlewares() {
        this.server.use((0, cors_1.default)());
        this.server.use(express_1.default.json());
        this.server.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        new routes_1.default(this.server);
        this.server.use(error_middleware_1.errorMiddleware);
    }
    initDirectories() {
        // Public directory
        if (!fs_1.default.existsSync(path_1.default.join(__dirname, "../public"))) {
            fs_1.default.mkdirSync(path_1.default.join(__dirname, "../public"));
        }
        // Resume directory
        if (!fs_1.default.existsSync(path_1.default.join(__dirname, "../public/resumes"))) {
            fs_1.default.mkdirSync(path_1.default.join(__dirname, "../public/resumes"));
        }
        // Uploads directory
        if (!fs_1.default.existsSync(path_1.default.join(__dirname, "../public/uploads"))) {
            fs_1.default.mkdirSync(path_1.default.join(__dirname, "../public/uploads"));
        }
    }
    database() {
        const MONGO_URL = process.env.MONGO_URL || "";
        mongoose_1.default
            .connect(MONGO_URL, {})
            .then(() => __awaiter(this, void 0, void 0, function* () {
            console.log(`✅[Server]: Database is connected`);
            yield seeders_1.default.run();
        }))
            .catch((error) => {
            console.log(`❌[Server] Database connection error: ${error}`);
        });
    }
    passport() {
        this.server.use(passport_1.default.initialize());
        require("./middlewares/jwt.middleware")(passport_1.default);
    }
    start() {
        const PORT = process.env.PORT
            ? parseInt(process.env.PORT, 10)
            : 5555;
        this.server
            .listen(PORT, () => {
            if (process.env.NODE_ENV === "development") {
                console.log(`⚡️[Server]: Server is running at http://localhost:${PORT}`);
            }
            else {
                console.log(`⚡️[Server]: Server is running`);
            }
        })
            .on("error", (err) => {
            if (err.code === "EADDRINUSE") {
                console.log(`❌ Error: address already in use`);
            }
            else {
                console.log(err);
            }
        });
    }
}
exports.default = Application;
