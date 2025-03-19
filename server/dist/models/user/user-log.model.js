"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserLogSchema = new mongoose_1.default.Schema({
    user_account_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "UserAccount",
        required: true,
    },
    last_login_date: {
        type: Date,
        required: true,
    },
    last_job_apply_date: {
        type: Date,
        required: true,
    },
}, {
    collection: "user_log",
    timestamps: true,
});
const UserLog = mongoose_1.default.model("UserLog", UserLogSchema);
exports.default = UserLog;
