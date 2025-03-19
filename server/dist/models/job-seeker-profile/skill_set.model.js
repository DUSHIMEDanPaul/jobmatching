"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SkillSetSchema = new mongoose_1.default.Schema({
    skill_set_name: {
        type: String,
        required: true,
        length: 50,
    },
}, {
    collection: "skill_set",
    timestamps: true,
});
const SkillSet = mongoose_1.default.model("SkillSet", SkillSetSchema);
exports.default = SkillSet;
