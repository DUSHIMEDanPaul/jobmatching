"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const JobPostSkillSetSchema = new mongoose_1.default.Schema({
    skill_set_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "SkillSet",
        required: true,
    },
    job_post_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "JobPost",
        required: true,
    },
    skill_level: {
        type: Number,
        required: true,
    },
}, {
    collection: "job_post_skill_set",
    timestamps: true,
});
const JobPostSkillSet = mongoose_1.default.model("JobPostSkillSet", JobPostSkillSetSchema);
exports.default = JobPostSkillSet;
