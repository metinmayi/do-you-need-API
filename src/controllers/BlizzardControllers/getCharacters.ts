import axios from "axios";
import { Request, Response } from "express";

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
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const getMaxLevelCharacters = (accounts: Array<any>) => {
  const characters = accounts
    .map((account) => account.characters)
    .flat()
    .filter((character) => character.level === 60);

  const maxLevel = characters.reduce((a, b) => {
    const character = {
      name: b.name,
      realm: b.realm.slug,
      faction: b.faction.type,
    };
    a.push(character);
    return a;
  }, []);

  return maxLevel;
};
