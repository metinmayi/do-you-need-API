"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBestUpgradesPerSlot = void 0;
const constants_1 = require("../../constants");
/**
 * Get's an array of positive upgrades and returns an array of the best upgrade for each slot.
 * @param {Result[]} positiveUpgrades An array of positive upgrades.
 * @param {RaidbotsDroptimizer} droptimizer The original droptimizer.
 * @returns {Result[]} An array of unique positive upgrades.
 */
function getBestUpgradesPerSlot(positiveUpgrades, droptimizer) {
    const currentDPS = droptimizer.sim.statistics.raid_dps.mean;
    const bossMap = new Map();
    for (const upgrade of positiveUpgrades) {
        const [instaceID, bossID, difficulty, itemID, unknown, slot] = upgrade.name.split("/");
        const bossName = constants_1.IdToBoss[+bossID];
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
exports.getBestUpgradesPerSlot = getBestUpgradesPerSlot;
