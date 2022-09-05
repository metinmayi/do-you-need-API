import { Request, Response } from "express";
import { getPlayer } from "../../helpers/blizzardHelpers/getPlayer";
import { dbGuildStatus } from "../../helpers/doYouNeedHelpers/dbGuildStatus";
import { getGuildStatusValidation } from "../../validations/blizzardValidation/getGuildStatusValidation";

export const getGuildStatus = async (req: Request, res: Response) => {
  const token = req.user?.accessToken;

  const validation = getGuildStatusValidation(req.query, token);
  if (!validation.success) {
    return res.status(403).json(validation.error);
  }

  try {
    const player = await getPlayer(
      validation.data.character,
      validation.data.realm,
      validation.data.token
    );
    const guild = await dbGuildStatus(player.guild.id);
    res.status(200).json(guild);
  } catch (error: any) {
    console.log("getGuildStatus" + error.message);
    res.status(500).send(error.message);
  }
};
