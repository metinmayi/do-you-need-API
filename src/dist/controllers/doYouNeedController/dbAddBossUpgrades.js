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
exports.dbAddBossUpgrades = void 0;
const database_1 = require("../../database/database");
const IBossUpgrade_1 = require("../../models/IBossUpgrade");
/**
 * Takes the character's ID and the upgrades for a specific boss.
 * Merges the ugprades with default upgrades and adds them to the table of boss_upgrades
 * @param characterID The character's ID. Consists of name-server
 * @param bestUpgradesPerSlot An array [bossName, arrayOfUpgrades]
 */
function dbAddBossUpgrades(characterID, bestUpgradesPerSlot) {
    return __awaiter(this, void 0, void 0, function* () {
        const [bossName, upgrades] = bestUpgradesPerSlot;
        const SQL = "INSERT INTO boss_upgrades() VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const defaultUpgrades = new IBossUpgrade_1.IBossUpgrade(bossName, characterID);
        const currentUpgrades = Object.fromEntries(upgrades);
        const mergedUpgrades = Object.assign(defaultUpgrades, currentUpgrades);
        const values = Object.values(mergedUpgrades).map((value) => {
            return typeof value !== "number" ? value : Math.round(value).toString();
        });
        yield database_1.pool.execute(SQL, values);
    });
}
exports.dbAddBossUpgrades = dbAddBossUpgrades;
