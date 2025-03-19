"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ExperienceDetailSchema = new mongoose_1.default.Schema({
    user_account_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "UserAccount",
        required: true,
    },
    is_current_job: {
        type: Boolean,
        required: true,
    },
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        required: false,
    },
    job_title: {
        type: String,
        required: true,
        length: 50,
    },
    company_name: {
        type: String,
        required: true,
        length: 100,
    },
    job_location_city: {
        type: String,
        required: true,
        length: 50,
    },
    job_location_state: {
        type: String,
        required: true,
        length: 50,
    },
    job_location_country: {
        type: String,
        required: true,
        length: 50,
    },
    job_description: {
        type: String,
        required: true,
        length: 4000,
    },
}, {
    collection: "experience_detail",
    timestamps: true,
});
const ExperienceDetail = mongoose_1.default.model("ExperienceDetail", ExperienceDetailSchema);
exports.default = ExperienceDetail;
