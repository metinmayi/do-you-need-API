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
function dbAddBossUpgrades(characterID, bestUpgradesPerSlot, meanDPS, blizzardGuildId) {
    return __awaiter(this, void 0, void 0, function* () {
        const [bossName, upgrades] = bestUpgradesPerSlot;
        const SQL = "INSERT INTO boss_upgrades(boss_name, character_id, head, shoulder, chest, wrist, hands, waist, legs, feet, neck, back, finger, trinket, main_hand, one_hand, off_hand, blizzard_guild_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) AS new ON DUPLICATE KEY UPDATE boss_name=new.boss_name, character_id=new.character_id, head=new.head, shoulder=new.shoulder, chest=new.chest, wrist=new.wrist, hands=new.hands, waist=new.waist, legs=new.legs, feet=new.feet, neck=new.neck, back=new.back, finger=new.finger, trinket=new.trinket, main_hand=new.main_hand, one_hand=new.one_hand, off_hand=new.off_hand, blizzard_guild_id = new.blizzard_guild_id";
        const defaultUpgrades = new IBossUpgrade_1.IBossUpgrade(bossName, characterID);
        const currentUpgrades = Object.fromEntries(upgrades);
        const mergedUpgrades = Object.assign(defaultUpgrades, currentUpgrades);
        const values = Object.values(mergedUpgrades).map((value) => {
            if (typeof value !== "number") {
                return value;
            }
            const percentageUpgrade = ((value / meanDPS) * 100).toFixed(1);
            const upgrade = Math.round(value);
            return `${percentageUpgrade}% (${upgrade})`;
        });
        values.push(blizzardGuildId);
        yield database_1.pool.execute(SQL, values);
    });
}
exports.dbAddBossUpgrades = dbAddBossUpgrades;
