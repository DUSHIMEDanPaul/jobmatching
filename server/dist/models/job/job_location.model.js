"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const JobLocationSchema = new mongoose_1.default.Schema({
    street_address: {
        type: String,
        required: true,
        length: 200,
    },
    city: {
        type: String,
        required: true,
        length: 50,
    },
    state: {
        type: String,
        required: true,
        length: 50,
    },
    country: {
        type: String,
        required: true,
        length: 50,
    },
    zip_code: {
        type: String,
        required: true,
        length: 10,
    },
}, {
    collection: "job_location",
    timestamps: true,
});
const JobLocation = mongoose_1.default.model("JobLocation", JobLocationSchema);
exports.default = JobLocation;
