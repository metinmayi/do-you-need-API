import axios from "axios";
import { Request, Response } from "express";
import { getAccessToken } from "./BlizzardUtils/getAccessToken";

export const getCharacters = async (req: Request, res:Response) => {
    const { code } = req.query;
    if (typeof code !== 'string') {
        res.sendStatus(400);
        return;
    }

    const token = await getAccessToken(code);

    const result = await axios(
    `https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_EU&access_token=${token}`
  );
  const maxLevelChars =  getMaxLevelCharacters(result.data.wow_accounts);
  res.redirect('http://localhost:3000/synchronize');
}

const getMaxLevelCharacters = (accounts: Array<any>) => {
  const characters = accounts.map(account => account.characters).flat();
  console.log(characters);
  const maxLevel = characters.filter(character => character.level == 60);
  console.log(JSON.stringify(maxLevel));

}