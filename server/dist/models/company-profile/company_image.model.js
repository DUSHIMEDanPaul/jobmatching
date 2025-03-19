"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CompanyImageSchema = new mongoose_1.default.Schema({
    company_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "CompanyProfile",
        required: true,
    },
    company_image: {
        type: String,
        required: true,
    },
}, {
    collection: "company_image",
    timestamps: true,
});
const CompanyImage = mongoose_1.default.model("CompanyImage", CompanyImageSchema);
exports.default = CompanyImage;
