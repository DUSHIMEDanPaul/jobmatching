"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const JobTypeSchema = new mongoose_1.default.Schema({
    job_type: {
        type: String,
        required: true,
        length: 50,
    },
}, {
    collection: "job_type",
    timestamps: true,
});
const JobType = mongoose_1.default.model("JobType", JobTypeSchema);
exports.default = JobType;
