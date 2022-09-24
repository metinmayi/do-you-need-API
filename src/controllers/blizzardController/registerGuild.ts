import { Request, Response } from "express";
import { checkGMStatus } from "../../helpers/blizzardHelpers/checkGMStatus";
import { getGuildInformation } from "../../helpers/blizzardHelpers/getGuildInformation";
import { getRoster } from "../../helpers/blizzardHelpers/getRoster";
import { dbStoreGuild } from "../../helpers/blizzardHelpers/dbStoreGuild";
import { DYNResponse } from "../../models/DYNResponse";
import { registerGuildValidation } from "../../validations/blizzardValidation/registerGuildValidation";
import { dbAddGuildToUser } from "../../helpers/blizzardHelpers/dbAddGuildToUser";

/**
 * Registers a guild to DoYouNeed.
 * Also adds that guild to the player's list of guilds.
 * @param req Express Request
 * @param res Express Response
 * @returns Void
 */
export async function registerGuild(req: Request, res: Response) {
  try {
    const response = new DYNResponse();
    const user = {
      character: req.body.character.toLowerCase(),
      guild: req.body.guild,
      realm: req.body.realm.toLowerCase(),
      token: req.user?.accessToken,
    };

    const validation = registerGuildValidation(user);
    if (!validation.success) {
      response.error = true;
      response.errorMessage = validation.error.message;
      return res.status(400).json(response);
    }

    const { character, guild, realm, token } = validation.data;

    const guildInformation = await getGuildInformation(
      realm,
      guild.name,
      token
    );
    const rosterURL = guildInformation.data.roster.href;
    const roster = await getRoster(rosterURL, token);

    const isGM = await checkGMStatus(roster, character);
    if (!isGM) {
      response.error = true;
      response.errorMessage = `${character} is not the Guildmaster of ${guild}`;
      return res.status(400).json(response);
    }

    const insertedGuild = await dbStoreGuild(guildInformation);
    await dbAddGuildToUser(req.user?.username, insertedGuild, "0");

    return res.status(200).json(response);
  } catch (error: any) {
    res.sendStatus(500);
    console.log(error);
  }
}
