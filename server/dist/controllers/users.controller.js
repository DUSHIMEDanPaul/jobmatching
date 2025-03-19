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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * UserController
 * This class contains methods for handling users
 *
 * @class
 *
 * @method getUserPersonal - This method is used to get the personal information of a user
 * @method getUser - This method is used to get a user by id
 * @method updateUser - This method is used to update a user
 */
class UserController {
    /**
     * This method is used to get the personal information of a user
     * @param req Request
     * @param res Response
     */
    static getUserPersonal(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Not implemented yet
            res
                .status(200)
                .send(`⚡️[Server]: User ManagementController getUserPersonal!`);
        });
    }
    /**
     * This method is used to get a user by id
     * @param req Request
     * @param res Response
     */
    static getUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Not implemented yet
            res.status(200).send(`⚡️[Server]: User ManagementController getUser!`);
        });
    }
    /**
     * This method is used to update a user
     * @param req Request
     * @param res Response
     */
    static updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Not implemented yet
            res.status(200).send(`⚡️[Server]: User ManagementController updateUser!`);
        });
    }
}
exports.default = UserController;
