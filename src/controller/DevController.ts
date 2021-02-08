import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Dev} from "../entity/Dev";

export class DevController {

    private devRepository = getRepository(Dev);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.devRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.devRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.devRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let devToRemove = await this.devRepository.findOne(request.params.id);
        await this.devRepository.remove(devToRemove);
    }

}