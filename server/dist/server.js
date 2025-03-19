"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = __importDefault(require("./application"));
const app = new application_1.default();
app.start();
process.on("uncaughtException", (err) => {
    console.log(err.name, err.message);
    console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
    process.exit(1);
});
process.on("unhandledRejection", (err) => {
    console.log(err.name, err.message);
    console.log("UNHANDLED REJECTION! 💥 Shutting down...");
    process.exit(1);
});
