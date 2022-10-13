import { Request, Response } from "express";
import { checkGMStatus } from "../../helpers/blizzardHelpers/checkGMStatus";
import { getGuildInformation } from "../../helpers/blizzardHelpers/getGuildInformation";
import { getRoster } from "../../helpers/blizzardHelpers/getRoster";
import { registerGuildValidation } from "../../validations/blizzardValidation/registerGuildValidation";
import { dbAddGuildToUser } from "../../helpers/blizzardHelpers/dbAddGuildToUser";
import { constructGuild } from "../../helpers/blizzardHelpers/constructGuild";
import { dbStoreGuild } from "../../helpers/doYouNeedHelpers/dbStoreGuild";
import { dbStoreUserGuild } from "../../helpers/doYouNeedHelpers/dbStoreUsersGuild";
import { isExpressUser } from "../../models/ExpressUser";

/**
 * Registers a guild to DoYouNeed.
 * Also adds that guild to the player's list of guilds.
 * @param req Express Request
 * @param res Express Response
 * @returns Void
 */
export async function registerGuild(req: Request, res: Response) {
  if (!isExpressUser(req.user)) {
    return res.status(401).json("No user found");
  }
  try {
    const user = {
      character: req.body.character.toLowerCase(),
      guild: req.body.guild,
      realm: req.body.realm.toLowerCase(),
      token: req.user?.access_token,
    };

    const validation = registerGuildValidation(user);
    if (!validation.success) {
      return res.status(403).json("Bad payload");
    }

    const { character, guild, realm, token } = validation.data;

    const guildInformation = await getGuildInformation(
      realm,
      guild.name,
      token
    );

    const rosterURL = guildInformation.roster.href;
    const roster = await getRoster(rosterURL, token);

    const isGM = await checkGMStatus(roster, character);
    if (!isGM) {
      return res.status(401).json("Character is not the GM");
    }

    const iGuild = constructGuild(guildInformation);
    await dbStoreGuild(iGuild);
    await dbStoreUserGuild(iGuild.blizzard_id, req.user?.id, 0);

    return res.status(200).json("Success");
  } catch (error: any) {
    res.sendStatus(500);
    console.log(error);
  }
}
