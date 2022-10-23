import { IdToBoss } from "../../constants";
import {
  RaidbotsDroptimizer,
  Result,
} from "../../models/raidbots/RaidbotsDroptimizer";

/**
 * Get's an array of positive upgrades and returns an array of the best upgrade for each slot.
 * @param {Result[]} positiveUpgrades An array of positive upgrades.
 * @param {RaidbotsDroptimizer} droptimizer The original droptimizer.
 * @returns {Map<any, any>} A map of unique positive upgrades.
 */
export function getBestUpgradesPerSlot(
  positiveUpgrades: Result[],
  droptimizer: RaidbotsDroptimizer
) {
  const currentDPS = droptimizer.sim.statistics.raid_dps.mean;
  const bossMap = new Map();
  for (const upgrade of positiveUpgrades) {
    const [instaceID, bossID, difficulty, itemID, unknown, slot] =
      upgrade.name.split("/");
    const bossName = IdToBoss[+bossID];
    const DPSupgrade = upgrade.mean - currentDPS;

    // First entry for a new boss.
    if (!bossMap.has(bossName)) {
      bossMap.set(bossName, new Map([[slot, DPSupgrade]]));
      continue;
    }

    // First entry for the slot in the boss
    if (!bossMap.get(bossName).has(slot)) {
      bossMap.get(bossName).set(slot, DPSupgrade);
      continue;
    }

    // Compare the slot and keep the highest value upgrae
    if (bossMap.get(bossName).get(slot) < DPSupgrade) {
      bossMap.get(bossName).set(slot, DPSupgrade);
    }
  }

  return bossMap;
}
