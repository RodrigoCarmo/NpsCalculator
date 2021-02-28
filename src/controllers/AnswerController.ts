import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";
import SurveysUsersRepository from '../repositories/SurveysUsersRepository';


class AnswerController {
    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveyysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveyysUsersRepository.findOne({
            id: String(u)
        });

        if (!surveyUser) {
            throw new AppError('Survey User does not exists!');
        }

        surveyUser.value = Number(value);

        await surveyysUsersRepository.save(surveyUser);

        return response.status(200).json(surveyUser);
    }
}

export default AnswerController;