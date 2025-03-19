"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SeekerSkillSetSchema = new mongoose_1.default.Schema({
    user_account_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "UserAccount",
        required: true,
    },
    skill_set_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "SkillSet",
        required: true,
    },
    skill_level: {
        type: Number,
        required: true,
    },
}, {
    collection: "seeker_skill_set",
    timestamps: true,
});
const SeekerSkillSet = mongoose_1.default.model("SeekerSkillSet", SeekerSkillSetSchema);
exports.default = SeekerSkillSet;
