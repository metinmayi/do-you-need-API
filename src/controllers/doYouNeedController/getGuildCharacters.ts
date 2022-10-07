import { Request, Response } from "express";
import { dbGetCharacters } from "../../helpers/doYouNeedHelpers/dbGetCharacters";
import { isIGuild } from "../../models/IGuild";

export async function getGuildCharacterUpgrades(req: Request, res: Response) {
  // MAKE SURE USER IS AUTHENTICATED
  // VALIDATE
  const { guildID } = req.body;
  const result = await dbGetCharacters(guildID);
  if (!isIGuild(result)) {
    return res.sendStatus(404);
  }
  res.status(200).json(result.characters);
}
