import axios from "axios";
import { Request, Response } from "express";
import { getMaxLevelCharacters } from "../../helpers/blizzardHelpers/getMaxLevelCharacters";
import { BlizzardRetrievedUser } from "../../models/BlizzardModels/BlizzardRetrievedUser";

/**
 * Get's the max level characters from a user's account. This will check through all of their WoW accounts.
 * @param req Express Request
 * @param res Express Response
 */
export const getCharacters = async (req: Request, res: Response) => {
  const token = req.user?.access_token;

  if (!token) {
    res.status(401).json({ message: "User does not have a valid accessToken" });
  }

  try {
    const result = await axios(
      `https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_EU&access_token=${token}`
    );
    const retrievedUser: BlizzardRetrievedUser = result.data;
    const maxLevelChars = getMaxLevelCharacters(retrievedUser.wow_accounts);

    res.status(200).json(maxLevelChars);
  } catch (error: any) {
    res.sendStatus(500);
    console.log("getCharacters:" + error.message);
  }
};
