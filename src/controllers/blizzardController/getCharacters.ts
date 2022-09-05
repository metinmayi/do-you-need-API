import axios from "axios";
import { Request, Response } from "express";
import { getMaxLevelCharacters } from "../../helpers/blizzardHelpers/getMaxLevelCharacters";

export const getCharacters = async (req: Request, res: Response) => {
  const token = req.user?.accessToken;

  if (!token) {
    res.status(401).json({ message: "User does not have a valid accessToken" });
  }

  try {
    const result = await axios(
      `https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_EU&access_token=${token}`
    );

    const maxLevelChars = getMaxLevelCharacters(result.data.wow_accounts);

    res.status(200).json(maxLevelChars);
  } catch (error: any) {
    res.sendStatus(500);
    console.log("getCharacters:" + error.message);
  }
};
