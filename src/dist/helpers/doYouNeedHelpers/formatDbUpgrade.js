"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDbUpgrade = void 0;
const bossLoot_1 = require("../../constants/bossLoot");
/**
 * Takes an array of upgrades and formats them in accordance to client requirements.
 * @param upgrades Array of upgrades from the DB.
 * @returns Array of upgrades formatted to client needs.
 */
function formatDbUpgrade(upgrades, bossName) {
    const formattedUpgrades = upgrades.map((upgrade) => {
        const upgradeObject = {
            id: upgrade.id,
            selected: upgrade.selected,
            bossName: upgrade.boss_name,
            name: upgrade.name,
            role: upgrade.role,
            class: upgrade.class,
            upgrades: [""],
        };
        const bossDrops = bossLoot_1.bossLoot[bossName];
        bossDrops.forEach((bossDrop) => {
            let incomingUpgrade = upgrade[bossDrop];
            if (!incomingUpgrade) {
                incomingUpgrade = "-";
            }
            upgradeObject.upgrades.push(incomingUpgrade);
        });
        return upgradeObject;
    });
    return formattedUpgrades;
}
exports.formatDbUpgrade = formatDbUpgrade;
