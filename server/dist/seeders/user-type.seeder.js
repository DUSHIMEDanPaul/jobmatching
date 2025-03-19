"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_type_model_1 = __importDefault(require("../models/user/user-type.model"));
class UserTypeSeeder {
    static run() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = [
                {
                    user_type_name: "job_seeker",
                    user_type_display_name: "Job Seeker",
                },
                {
                    user_type_name: "hr_recruiter",
                    user_type_display_name: "HR Recruiter",
                },
            ];
            for (const userType of data) {
                const existingUserType = yield user_type_model_1.default.findOne({
                    user_type_name: userType.user_type_name,
                });
                if (!existingUserType) {
                    yield user_type_model_1.default.create({
                        user_type_name: userType.user_type_name,
                        user_type_display_name: userType.user_type_display_name,
                    });
                }
            }
        });
    }
}
exports.default = UserTypeSeeder;
