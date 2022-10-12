import { Request, Response } from "express";
import { dbGetUserGuilds } from "../../helpers/doYouNeedHelpers/dbGetUserGuilds";

/**
 * Login successful. Returns an array of the guild blizzardIDs connected to the logged in user.
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {void}
 */
export async function goodLogin(req: Request, res: Response) {
  try {
    if (!isExpressUser(req.user)) {
      res.status(404).send("No user found");
      return;
    }

    const guilds = dbGetUserGuilds(req.user.id);
    res.status(200).json({ guilds: guilds });
  } catch (error) {
    console.log({ goodLogin: error });
    res.sendStatus(500);
  }
}

export function isExpressUser(
  potentialUser: Express.User | undefined
): potentialUser is Express.User {
  return true;
}
