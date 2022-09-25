import { Request, Response } from "express";
import { DYNResponse } from "../../models/DYNResponse";
import { zAddCharacterUpgradeValidation } from "../../validations/doYouNeedValidation/addCharacterUpgradeValidation";

/**
 * Takes a reportID and starts the process of importing data, breaking it up and sending back a player object.
 */
export const addCharacterUpgrades = async (req: Request, res: Response) => {
  const response = new DYNResponse();
  const validation = zAddCharacterUpgradeValidation(req.body);
  if (!validation.success) {
    response.error = true;
    response.message = validation.error.message;
    return res.status(403).json(response);
  }
  res.send(200);
  // console.log(req.body);
  // res.send(200);
  // Does the fetch.
  //   const playerData = await fetch(raidbotsURL);

  // Necessary declarations
  //   const metaInfo = playerData.simbot.meta;
  //   const simResults = playerData.sim.profilesets.results;
  //   const playerDps = playerData.sim.players[0].collected_data.dps.mean;

  //   // Checks if the log is for the correct raid;
  //   validateInstanceAndDifficulty(metaInfo);

  //   // Gets a player object with default values.
  //   const player = getDefaultPlayer(metaInfo);

  //   // Maps out all the bosses with their upgrades.
  //   const bossesWithUpgrades = new Map<IBossName, IBossUpgrade[]>();
  //   mapUpgradesToBoss(simResults, bossesWithUpgrades, playerDps);
  //   await queryUpgrades(bossesWithUpgrades, player);

  return true;
};
