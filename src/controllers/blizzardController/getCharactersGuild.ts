import { Request, Response } from "express";
import { getCharacter } from "../../helpers/blizzardHelpers/getCharacter";
import { dbGuildStatus } from "../../helpers/doYouNeedHelpers/dbGuildStatus";
import { DYNResponse } from "../../models/DYNResponse";
import { GetCharactersGuildValidation } from "../../validations/blizzardValidation/getCharactersGuildValidation";
import { constructNewGuild } from "../../helpers/blizzardHelpers/constructNewGuild";

/**
 * Check's what guild the character is a member of through the blizzard API.
 * Then proceeds to check if that guild is registered in DoYouNeed.
 * @param req Express Request
 * @param res Express Response
 * @returns void
 */
export async function getCharactersGuild(req: Request, res: Response) {
  const response = new DYNResponse();
  const token = req.user?.access_token;

  const validation = GetCharactersGuildValidation(req.query, token);
  if (!validation.success) {
    response.error = true;
    response.errorMessage = validation.error.message;
    return res.status(403).json(response);
  }

  try {
    const retrievedCharacter = await getCharacter(
      validation.data.character,
      validation.data.realm,
      validation.data.token
    );

    const guild = await dbGuildStatus(retrievedCharacter.guild.id);
    if (guild) {
      response.data = guild;
      return res.status(200).json(response);
    }

    const newGuild = constructNewGuild(retrievedCharacter);
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
