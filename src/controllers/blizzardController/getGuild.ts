import { Request, Response } from "express";
import { getPlayer } from "../../helpers/blizzardHelpers/getPlayer";
import { dbGuildStatus } from "../../helpers/doYouNeedHelpers/dbGuildStatus";
import { DYNResponse } from "../../models/DYNResponse";
import { getGuildStatusValidation } from "../../validations/blizzardValidation/getGuildStatusValidation";
import { getUnregisteredGuild } from "./getUnregisteredGuild";

export const getGuild = async (req: Request, res: Response) => {
  const response = new DYNResponse();
  const token = req.user?.accessToken;

  const validation = getGuildStatusValidation(req.query, token);
  if (!validation.success) {
    response.error = true;
    response.errorMessage = validation.error.message;
    return res.status(403).json(response);
  }

  try {
    const player = await getPlayer(
      validation.data.character,
      validation.data.realm,
      validation.data.token
    );

    const guild =
      (await dbGuildStatus(player.guild.id)) || getUnregisteredGuild(player);

    response.message = "No registered guilds were found";
    response.data = guild;

    res.status(200).json(response);
  } catch (error: any) {
    response.error = true;
    response.errorMessage = error.message;
    console.log("getGuildStatus" + error.message);
    res.status(500).json(response);
  }
};
