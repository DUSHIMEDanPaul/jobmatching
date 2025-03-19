"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BusinessStreamSchema = new mongoose_1.default.Schema({
    //- description of the company’s main business stream
    business_stream_name: {
        type: String,
        required: true,
        length: 255,
    },
}, {
    collection: "business_stream",
    timestamps: true,
});
const BusinessStream = mongoose_1.default.model("BusinessStream", BusinessStreamSchema);
exports.default = BusinessStream;
