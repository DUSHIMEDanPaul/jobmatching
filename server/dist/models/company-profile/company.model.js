"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CompanySchema = new mongoose_1.default.Schema({
    company_name: {
        type: String,
        required: true,
        length: 100,
    },
    profile_description: {
        type: String,
        required: true,
        length: 1000,
    },
    business_stream_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "BusinessStream",
        required: true,
    },
    establishment_date: {
        type: Date,
        required: true,
    },
    company_website_url: {
        type: String,
        required: true,
        length: 500,
    },
}, {
    collection: "company",
    timestamps: true,
});
const Company = mongoose_1.default.model("Company", CompanySchema);
exports.default = Company;
