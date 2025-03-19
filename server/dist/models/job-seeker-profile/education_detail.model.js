"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const EducationDetailSchema = new mongoose_1.default.Schema({
    user_account_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "UserAccount",
        required: true,
    },
    certificate_degree_name: {
        type: String,
        required: true,
        length: 100,
    },
    major: {
        type: String,
        required: true,
        length: 100,
    },
    institute_university_name: {
        type: String,
        required: true,
        length: 100,
    },
    starting_date: {
        type: Date,
        required: true,
    },
    completion_date: {
        type: Date,
        required: false,
    },
    percentage: {
        type: Number,
        required: false,
    },
    cgpa: {
        type: Number,
        required: false,
    },
}, {
    collection: "education_detail",
    timestamps: true,
});
EducationDetailSchema.index({
    user_account_id: 1,
    certificate_degree_name: 1,
    major: 1,
});
const EducationDetail = mongoose_1.default.model("EducationDetail", EducationDetailSchema);
exports.default = EducationDetail;
