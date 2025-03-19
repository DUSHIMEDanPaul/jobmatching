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
 * JobApplicationsController
 * This class contains methods for handling job applications
 * @class
 *
 * @method applyForJob - This method is used to apply for a job
 * @method getJobApplications - This method is used to get list of job applications paginated
 */
class JobApplicationsController {
    /**
     * This method is used to apply for a job
     * @param req Request
     * @param res Response
     */
    static applyForJob(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Not implemented yet
            res.status(200).send(`⚡️[Server]: ApplicationsController applyForJob!`);
        });
    }
    /**
     * This method is used to get list of a job applications paginated
     * @param req Request
     * @param res Response
     */
    static getJobApplications(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Not implemented yet
            res
                .status(200)
                .send(`⚡️[Server]: ApplicationsController getJobApplications!`);
        });
    }
    /**
     * This method is used to get list of a user [recruiter or job seeker] applications paginated
     * @param req Request
     * @param res Response
     */
    static getUserApplications(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Not implemented yet
            res
                .status(200)
                .send(`⚡️[Server]: ApplicationsController getUserApplications!`);
        });
    }
    /**
     * This method is used to update a job application
     * [Job seeker can update their application status, recruiter can do everything]
     *
     * @param req Request
     * @param res Response
     */
    static updateJobApplication(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Not implemented yet
            res
                .status(200)
                .send(`⚡️[Server]: ApplicationsController updateJobApplication!`);
        });
    }
}
exports.default = JobApplicationsController;
