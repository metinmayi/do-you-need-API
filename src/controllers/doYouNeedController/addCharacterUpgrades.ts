import axios from "axios";
import { Request, Response } from "express";
import { constructCharacter } from "../../helpers/doYouNeedHelpers/constructCharacter";
import { getBestUpgradesPerSlot } from "../../helpers/doYouNeedHelpers/getBestUpgradesPerSlot";
import { getPositiveUpgrades } from "../../helpers/doYouNeedHelpers/getPositiveUpgrades";
import { RaidbotsDroptimizer } from "../../models/raidbots/RaidbotsDroptimizer";
import { zAddCharacterUpgradeValidation } from "../../validations/doYouNeedValidation/addCharacterUpgradeValidation";
import { validateInstanceAndDifficulty } from "../../validations/doYouNeedValidation/validateInstanceAndDifficulty";
import { dbAddBossUpgrades } from "./dbAddBossUpgrades";
import { dbAddCharacter } from "./dbAddCharacter";

/**
 * Takes a raidbots URL and adds the character's upgrades to the guild.
 * @param req Express Request
 * @param res Express Response
 * @returns void
 */
export const addCharacterUpgrades = async (req: Request, res: Response) => {
  const validation = zAddCharacterUpgradeValidation(req.body);
  if (!validation.success) {
    return res.status(400).json(validation.error.message);
  }

  // Does the fetch.
  try {
    const droptimizer: RaidbotsDroptimizer = await axios(
      `${validation.data.raidbotsURL}/data.json`
    ).then((res) => res.data);

    const isValidInstance = validateInstanceAndDifficulty(droptimizer);
    if (!isValidInstance) {
      return res.send(400).json("Invalid instance and/or difficulty");
    }

    const character = constructCharacter(droptimizer);
    await dbAddCharacter(character);

    const positiveUpgrades = getPositiveUpgrades(droptimizer);
    const bestUpgradesPerSlot = getBestUpgradesPerSlot(
      positiveUpgrades,
      droptimizer
    );

    const meanDPS = droptimizer.sim.statistics.raid_dps.mean;
    for (const upgrade of bestUpgradesPerSlot) {
      await dbAddBossUpgrades(character.blizzardId, upgrade, meanDPS);
    }

    res.sendStatus(200);
  } catch (error: any) {
    res.sendStatus(500);
    console.log({ addCharacterUpgrades: error });
  }
};
