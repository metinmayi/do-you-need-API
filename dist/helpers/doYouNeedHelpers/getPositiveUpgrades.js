"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPositiveUpgrades = void 0;
/**
 * Get's all sim results from the droptimizer and returns the ones that yield a positive upgrade.
 * @param {RaidbotsDroptimizer} droptimizer Droptimizer object received from RaidbotsURL.
 * @returns {Result[]} An array of upgrades that yield a positive value.
 */
function getPositiveUpgrades(droptimizer) {
    const currentDPS = droptimizer.sim.statistics.raid_dps.mean;
    const upgrades = droptimizer.sim.profilesets.results;
    const positiveUpgrades = upgrades.filter((upgrade) => upgrade.mean > currentDPS);
    return positiveUpgrades;
}
exports.getPositiveUpgrades = getPositiveUpgrades;
