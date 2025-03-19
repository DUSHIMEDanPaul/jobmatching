"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const JobPostSchema = new mongoose_1.default.Schema({
    posted_by: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "UserAccount",
        required: true,
    },
    job_type_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "JobType",
        required: true,
    },
    company_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
    is_company_name_hidden: {
        type: Boolean,
        required: true,
    },
    created_date: {
        type: Date,
        required: true,
    },
    job_description: {
        type: String,
        required: true,
        length: 4000,
    },
    job_location_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "JobLocation",
        required: true,
    },
    is_active: {
        type: Boolean,
        required: true,
    },
}, {
    collection: "job_post",
    timestamps: true,
});
const JobPost = mongoose_1.default.model("JobPost", JobPostSchema);
exports.default = JobPost;
