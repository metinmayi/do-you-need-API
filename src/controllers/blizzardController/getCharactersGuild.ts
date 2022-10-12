import { Request, Response } from "express";
import { getCharacter } from "../../helpers/blizzardHelpers/getCharacter";
import { dbGetGuildByBlizzardId } from "../../helpers/doYouNeedHelpers/dbGuildStatus";
import { DYNResponse } from "../../models/DYNResponse";
import { GetCharactersGuildValidation } from "../../validations/blizzardValidation/getCharactersGuildValidation";
import { constructNewGuild } from "../../helpers/blizzardHelpers/constructNewGuild";
import { isExpressUser } from "../../models/ExpressUser";

/**
 * Check's what guild the character is a member of through the blizzard API.
 * Then proceeds to check if that guild is registered in DoYouNeed.
 * @param req Express Request
 * @param res Express Response
 * @returns void
 */
export async function getCharactersGuild(req: Request, res: Response) {
  if (!isExpressUser(req.user)) {
    return res.sendStatus(401).json("No user found");
  }

  const validation = GetCharactersGuildValidation(
    req.query,
    req.user.access_token
  );
  if (!validation.success) {
    return res.status(403).json(validation.error.message);
  }

  try {
    const retrievedCharacter = await getCharacter(
      validation.data.character,
      validation.data.realm,
      validation.data.token
    );

    const guild = await dbGetGuildByBlizzardId(
      retrievedCharacter.guild.id.toString()
    );
    if (guild.length > 0) {
      return res.status(200).json(guild);
    }

    const newGuild = constructNewGuild(retrievedCharacter);
    res.status(404).json(newGuild);
  } catch (error: any) {
    console.log("getGuildStatus" + error.message);
    res.status(500).json(error.message);
  }
}
