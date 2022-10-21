import axios from "axios";
import { Request, Response } from "express";
import { constructCharacter } from "../../helpers/doYouNeedHelpers/constructCharacter";
import { dbAddCharacterToGuild } from "../../helpers/doYouNeedHelpers/dbAddCharacterToGuild";
import { getPositiveUpgrades } from "../../helpers/doYouNeedHelpers/getPositiveUpgrades";
import { insertUpgrades } from "../../helpers/doYouNeedHelpers/insertUpgrades";
import { DYNResponse } from "../../models/DYNResponse";
import { RaidbotsDroptimizer } from "../../models/raidbots/RaidbotsDroptimizer";
import { zAddCharacterUpgradeValidation } from "../../validations/doYouNeedValidation/addCharacterUpgradeValidation";
import { validateInstanceAndDifficulty } from "../../validations/doYouNeedValidation/validateInstanceAndDifficulty";

/**
 * Takes a raidbots URL and adds the character's upgrades to the guild.
 * @param req Express Request
 * @param res Express Response
 * @returns void
 */
export const addCharacterUpgrades = async (req: Request, res: Response) => {
  const response = new DYNResponse();

  const validation = zAddCharacterUpgradeValidation(req.body);
  if (!validation.success) {
    response.error = true;
    response.message = validation.error.message;
    return res.status(400).json(response);
  }

  // Does the fetch.
  try {
    const droptimizer: RaidbotsDroptimizer = await axios(
      `${validation.data.raidbotsURL}/data.json`
    ).then((res) => res.data);

    const isValidInstance = validateInstanceAndDifficulty(droptimizer);
    if (!isValidInstance) {
      response.error = true;
      response.errorMessage = "Invalid instance and/or difficulty";
      return res.send(400).json(response);
    }

    const character = constructCharacter(droptimizer);
    const positiveUpgrades = getPositiveUpgrades(droptimizer);

    insertUpgrades(character, positiveUpgrades, droptimizer);

    await dbAddCharacterToGuild(character, validation.data.guild);
    res.sendStatus(200);
  } catch (error: any) {
    res.sendStatus(500);
    console.log({ addCharacterUpgrades: error });
  }
};
