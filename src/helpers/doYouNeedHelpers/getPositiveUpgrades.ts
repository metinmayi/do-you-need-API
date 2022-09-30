import { RaidbotsDroptimizer } from "../../models/raidbots/RaidbotsDroptimizer";

/**
 * Get's all sim results from the droptimizer and returns the ones that yield a positive upgrade.
 * @param {RaidbotsDroptimizer} droptimizer Droptimizer object received from RaidbotsURL.
 * @returns {Result[]} An array of upgrades that yield a positive value.
 */
export function getPositiveUpgrades(droptimizer: RaidbotsDroptimizer) {
  const currentDPS = droptimizer.sim.statistics.raid_dps.mean;
  const upgrades = droptimizer.sim.profilesets.results;

  const positiveUpgrades = upgrades.filter(
    (upgrade) => upgrade.mean > currentDPS
  );

  return positiveUpgrades;
}
