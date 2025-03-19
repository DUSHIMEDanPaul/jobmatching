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
 * JobsController
 * This class contains methods for handling jobs
 * @class
 *
 * @method getJobs - This method is used to get list of jobs paginated
 * @method createJob - This method is used to create a job
 * @method getJob - This method is used to get a job details by id
 * @method updateJob - This method is used to update a job
 * @method deleteJob - This method is used to delete a job
 */
class JobsController {
    /**
     * This method is used to get list of jobs paginated
     * @param req Request
     * @param res Response
     */
    static getJobs(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Not implemented yet
            res.status(200).send(`⚡️[Server]: JobsController getJobs!`);
        });
    }
    /**
     * This method is used to create a job
     * @param req Request
     * @param res Response
     */
    static createJob(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Not implemented yet
            res.status(200).send(`⚡️[Server]: JobsController createJob!`);
        });
    }
    /**
     * This method is used to get a job details by id
     * @param req Request
     * @param res Response
     */
    static getJob(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Not implemented yet
            res.status(200).send(`⚡️[Server]: JobsController getJob!`);
        });
    }
    /**
     * This method is used to update a job
     * @param req Request
     * @param res Response
     */
    static updateJob(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Not implemented yet
            res.status(200).send(`⚡️[Server]: JobsController updateJob!`);
        });
    }
    /**
     * This method is used to delete a job
     * @param req Request
     * @param res Response
     */
    static deleteJob(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Not implemented yet
            res.status(200).send(`⚡️[Server]: JobsController deleteJob!`);
        });
    }
}
exports.default = JobsController;
