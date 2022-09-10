import { Request, Response } from "express";
import { getGuildInformation } from "../../helpers/blizzardHelpers/getGuildInformation";
import { getRoster } from "../../helpers/blizzardHelpers/getRoster";
import { DYNResponse } from "../../models/DYNResponse";
import { getPlayersRankValidation } from "../../validations/blizzardValidation/getPlayersRankValidation";
import { addGuildToUser } from "./addGuildToUser";

export async function getPlayersRank(req: Request, res: Response) {
  try {
    const response = new DYNResponse();
    req.body.token = req.user?.accessToken;

    const validation = getPlayersRankValidation(req.body);
    if (!validation.success) {
      response.error = true;
      response.message = validation.error.message;
      return res.status(403).json(response);
    }

    const { characterName, guildName, guildRealm, token } = validation.data;

    const guildInformation = await getGuildInformation(
      guildRealm,
      guildName,
      token
    );
    const rosterURL = guildInformation.data.roster.href;
    const roster = await getRoster(rosterURL, token);

    const { rank } = roster.find(
      (member: any) => member.character.name === characterName
    );
    await addGuildToUser(guildInformation.data.id, req.user?.username, rank);

    response.data = rank;
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
