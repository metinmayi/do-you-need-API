"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUpgrades = void 0;
const constants_1 = require("../../constants");
/**
 * Takes an array of upgrades and inserts them into the character, in the corresponding bosses.
 * @param {ICharacter} character Character object
 * @param {Result[]} positiveUpgrades Array of upgrades that are an increase in value.
 * @param {RaidbotsDroptimizer} droptimizer Droptimizer object retrieved from Raidbots
 */
function insertUpgrades(character, positiveUpgrades, droptimizer) {
    const currentDPS = droptimizer.sim.statistics.raid_dps.mean;
    for (const upgrade of positiveUpgrades) {
        const [instaceID, bossID, difficulty, itemID, unknown, slot] = upgrade.name.split("/");
        const bossName = constants_1.IdToBoss[+bossID];
        const damageIncrease = upgrade.mean - currentDPS;
        const decimalIncrease = damageIncrease / currentDPS;
        const percentIncrease = (decimalIncrease * 100).toFixed(2);
        const ICharacterBossUpgrade = {
            slot,
            rawValue: Math.round(damageIncrease).toString(),
            percentageValue: percentIncrease,
        };
        if ((0, constants_1.isIBossName)(bossName)) {
            character.characterUpgrades[bossName].push(ICharacterBossUpgrade);
        }
        else {
            throw new TypeError(`${bossName} is not a valid bossname`);
        }
    }
}
exports.insertUpgrades = insertUpgrades;
