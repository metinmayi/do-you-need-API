import { Request, Response } from "express";
import { getCharacter } from "../../helpers/blizzardHelpers/getCharacter";
import { dbGuildStatus } from "../../helpers/doYouNeedHelpers/dbGuildStatus";
import { DYNResponse } from "../../models/DYNResponse";
import { GetCharactersGuildValidation } from "../../validations/blizzardValidation/getGuildValidation";
import { getUnregisteredGuild } from "./getUnregisteredGuild";

export async function getCharactersGuild(req: Request, res: Response) {
  const response = new DYNResponse();
  const token = req.user?.accessToken;

  const validation = GetCharactersGuildValidation(req.query, token);
  if (!validation.success) {
    response.error = true;
    response.errorMessage = validation.error.message;
    return res.status(403).json(response);
  }

  try {
    const player = await getCharacter(
      validation.data.character,
      validation.data.realm,
      validation.data.token
    );

    const guild = await dbGuildStatus(player.guild.id);
    if (guild) {
      response.data = guild;
      return res.status(200).json(response);
    }

    const newGuild = getUnregisteredGuild(player);
    response.message = "No registered guilds were found";
    response.data = newGuild;
    res.status(200).json(response);
  } catch (error: any) {
    response.error = true;
    response.errorMessage = error.message;
    console.log("getGuildStatus" + error.message);
    res.status(500).json(response);
  }
}
