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
const passport_jwt_1 = require("passport-jwt");
const user_account_model_1 = __importDefault(require("../models/user/user-account.model"));
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || "jwt_secret",
};
module.exports = (passport) => {
    passport.use(new passport_jwt_1.Strategy(options, (jwt_payload, done) => __awaiter(void 0, void 0, void 0, function* () {
        user_account_model_1.default.findById(jwt_payload.id)
            .then((user) => {
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        })
            .catch((err) => {
            return done(err, false, { message: "Server error" });
        });
    })));
};
