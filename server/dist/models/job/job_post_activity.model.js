"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const JobPostActivitySchema = new mongoose_1.default.Schema({
    user_account_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "UserAccount",
        required: true,
    },
    job_post_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "JobPost",
        required: true,
    },
    apply_date: {
        type: Date,
        required: true,
    },
}, {
    collection: "job_post_activity",
    timestamps: true,
});
const JobPostActivity = mongoose_1.default.model("JobPostActivity", JobPostActivitySchema);
exports.default = JobPostActivity;
