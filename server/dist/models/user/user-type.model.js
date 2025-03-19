"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// This is the schema for the user_type collection
// User types [Job Seekers, HR recruiters (or Independent Recruiters)]
const UserTypeSchema = new mongoose_1.default.Schema({
    user_type_name: {
        type: String,
        required: true,
        unique: true,
    },
    user_type_display_name: {
        type: String,
        required: true,
    },
}, {
    collection: "user_type",
    timestamps: true,
});
const UserType = mongoose_1.default.model("UserType", UserTypeSchema);
exports.default = UserType;
