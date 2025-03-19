"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SeekerProfileSchema = new mongoose_1.default.Schema({
    user_account_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "UserAccount",
        required: true,
    },
    first_name: {
        type: String,
        required: true,
        length: 50,
    },
    last_name: {
        type: String,
        required: true,
        length: 50,
    },
    current_salary: {
        type: Number,
        required: false,
    },
    is_annually_monthly: {
        type: String,
        required: false,
        length: 1,
    },
    currency: {
        type: String,
        required: false,
        length: 50,
    },
}, {
    collection: "seeker_profile",
    timestamps: true,
});
const SeekerProfile = mongoose_1.default.model("SeekerProfile", SeekerProfileSchema);
exports.default = SeekerProfile;
