"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDbUpgrade = void 0;
const bossLoot_1 = require("../../constants/bossLoot");
/**
 * Takes an array of upgrades and formats them in accordance to client requirements.
 * @param upgrades Array of upgrades from the DB.
 * @returns Array of upgrades formatted to client needs.
 */
function formatDbUpgrade(upgrades, bossName) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
exports.formatDbUpgrade = formatDbUpgrade;
