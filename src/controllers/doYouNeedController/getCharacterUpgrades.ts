import { Request, Response } from "express";
import { formatDbUpgrade } from "../../helpers/doYouNeedHelpers/formatDbUpgrade";
import { isArray } from "../../helpers/doYouNeedHelpers/isArray";
import { zValidateGetCharacterUpgrade } from "../../validations/doYouNeedValidation/getCharacterUpgradeValidation";
import { dbGetBossUpgrade } from "./dbGetBossUpgrade";

/**
 * Gets all boss_upgrades from characters of the specified guild
 * @param req Express request
 * @param res Express response
 * @returns {void}
 */
export async function getCharacterUpgrades(req: Request, res: Response) {
  try {
    const validation = zValidateGetCharacterUpgrade(req.body);
    if (!validation.success) {
      return res.status(400);
    }

    const { guildId, bossName } = validation.data;

    const characterUpgrades = await dbGetBossUpgrade(guildId, bossName);
    if (!isArray(characterUpgrades)) {
      return res.status(200).json([]);
    }

    const formattedUpgrades = formatDbUpgrade(characterUpgrades, bossName);

    res.status(200).json(formattedUpgrades);
  } catch (error: any) {
    res.status(500).json({ errorMessage: error.message });
    console.log({ getCharacterUpgrades: error });
  }
}
