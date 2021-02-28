import { Request, Response } from "express";
import NpsService from '../services/NpsService'


class NpsController {
    async execute(request: Request, response: Response) {
        const { survey_id } = request.params;

        const npsService = new NpsService();

        const nps = await npsService.execute(survey_id);

        console.log(nps)

        return response.json(nps)
    }
}

export default NpsController;