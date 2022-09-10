import { Request, Response } from "express";
import { checkGMStatus } from "../../helpers/blizzardHelpers/checkGMStatus";
import { getGuildInformation } from "../../helpers/blizzardHelpers/getGuildInformation";
import { getRoster } from "../../helpers/blizzardHelpers/getRoster";
import { storeGuild } from "../../helpers/blizzardHelpers/storeGuild";
import { DYNResponse } from "../../models/DYNResponse";
import { activateGuildValidation } from "../../validations/blizzardValidation/activateGuildValidation";
import { addGuildToUser } from "./addGuildToUser";

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

    const { character, guild, realm, token } = validation.data;

    const guildInformation = await getGuildInformation(realm, guild, token);
    const rosterURL = guildInformation.data.roster.href;
    const roster = await getRoster(rosterURL, token);

    const isGM = await checkGMStatus(roster, character);
    if (!isGM) {
      response.error = true;
      response.errorMessage = `${character} is not the Guildmaster of ${guild}`;
      return res.status(400).json(response);
    }

    await storeGuild(guildInformation);
    await addGuildToUser(guildInformation.data.id, req.user?.username, 0);

    return res.status(200).json(response);
  } catch (error: any) {
    res.sendStatus(500);
    console.log(error);
  }
}
