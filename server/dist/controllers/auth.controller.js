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
const http_status_codes_1 = require("http-status-codes");
const user_account_model_1 = __importDefault(require("../models/user/user-account.model"));
const user_type_model_1 = __importDefault(require("../models/user/user-type.model"));
const BadRequestError_1 = require("../errors/BadRequestError");
const ApiError_1 = require("../errors/ApiError");
/**
 * AuthController
 * This class contains methods for handling authentication
 * @class
 *
 * @method login - This method is used to login a user
 * @method signup - This method is used to register a user
 */
class AuthController {
    /**
     * This method is used to login a user
     * @param req Request
     * @param res Response
     */
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield user_account_model_1.default.findOne({ email: email });
                // If user account is not found, throw an error
                if (!user) {
                    throw new ApiError_1.ApiError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "User account not found", []);
                }
                // If user account is found, compare the password
                if (!user.comparePassword(password)) {
                    throw new ApiError_1.ApiError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "Invalid email or password", []);
                }
                // Send a response with the user account details
                res.status(http_status_codes_1.StatusCodes.OK).json({
                    user: user,
                    token: user.generateJWT(),
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * This method is used to register a user
     * @param req Request
     * @param res Response
     * @param next NextFunction
     */
    static signup(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const { user_type_name } = payload;
                // Find the user type where name [job_seeker, hr_recruiter]
                const userType = yield user_type_model_1.default.findOne({
                    user_type_name: user_type_name,
                });
                // If user type is not found, throw an error
                if (!userType) {
                    throw new BadRequestError_1.BadRequestError(`User type not found with user_type_name provided`, []);
                }
                // Check if user account exists
                const existingUser = yield user_account_model_1.default.findOne({
                    email: payload.email,
                });
                // If user account exists, throw an error
                if (existingUser) {
                    throw new BadRequestError_1.BadRequestError("User account already exists", []);
                }
                // Create a new user account with the user type id and other details
                const userAccount = new user_account_model_1.default(Object.assign(Object.assign({}, payload), { user_type_id: userType._id, registration_date: new Date() }));
                // Save the user account
                yield userAccount.save();
                // Send a response with the user account details
                res.status(http_status_codes_1.StatusCodes.CREATED).json({
                    message: "User account created successfully",
                    user: userAccount,
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * This method is used to get the current user
     * @param req Request
     * @param res Response
     * @param next NextFunction
     */
    static me(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get the user account from the request object
                const user = req.user;
                // Send a response with the user account details
                res.status(http_status_codes_1.StatusCodes.OK).json({
                    user: user,
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = AuthController;
