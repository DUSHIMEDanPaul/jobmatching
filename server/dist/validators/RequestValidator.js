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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class RequestValidator {
}
_a = RequestValidator;
RequestValidator.validate = (classInstance) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const convertedObject = (0, class_transformer_1.plainToInstance)(classInstance, req.body);
        yield (0, class_validator_1.validate)(convertedObject).then((errors) => {
            var _b;
            if (errors.length > 0) {
                let rawErrors = [];
                for (const error of errors) {
                    rawErrors = rawErrors.concat(...rawErrors, Object.values((_b = error.constraints) !== null && _b !== void 0 ? _b : []));
                }
                const message = "Request validation error";
                console.log(`❌ [RequestValidator.Error]`, rawErrors);
                res.status(400).json({ message, errors: rawErrors });
            }
        });
        next();
    });
};
exports.default = RequestValidator;
