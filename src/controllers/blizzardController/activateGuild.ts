import { Request, Response } from "express";
import { checkGMStatus } from "../../helpers/blizzardHelpers/checkGMStatus";
import { DYNResponse } from "../../models/DYNResponse";
import { activateGuildValidation } from "../../validations/blizzardValidation/activateGuildValidation";

export async function activateGuild(req: Request, res: Response) {
  try {
    const response = new DYNResponse();
    const user = {
      character: req.body.character.toLowerCase(),
      guild: req.body.guild.toLowerCase(),
      realm: req.body.realm.toLowerCase(),
      token: req.user?.accessToken,
    };

    const validation = activateGuildValidation(user);
    if (!validation.success) {
      response.error = true;
      response.errorMessage = validation.error.message;
      return res.status(400).json(response);
    }

    const isGM = await checkGMStatus(user);
    if (!isGM) {
      response.error = true;
      response.errorMessage =
        "The character you selected is not the guildmaster.";
      return res.status(400).json(response);
    }

    return res.status(200).json(response);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}
