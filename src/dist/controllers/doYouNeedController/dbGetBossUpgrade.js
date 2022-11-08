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
exports.dbGetBossUpgrade = void 0;
const database_1 = require("../../database/database");
/**
 * Receives upgrades from characters that belong to the guild
 * @param guildID The ID of the guild
 * @param bossName The boss's name
 * @returns {[] any} An array of the results
 */
function dbGetBossUpgrade(guildID, bossName) {
    return __awaiter(this, void 0, void 0, function* () {
        const SQL = `SELECT c.character_id as id, selected, boss_name, name, role, class, back,chest,feet,finger,hands,head,legs,main_hand,neck,off_hand,one_hand,shoulder,trinket,waist,wrist
    FROM characters c
    JOIN boss_upgrades bu ON bu.character_id = c.character_id 
    WHERE c.blizzard_guild_id = ? and bu.boss_name = ?;`;
        const result = yield database_1.pool.execute(SQL, [guildID, bossName]);
        return result[0];
    });
}
exports.dbGetBossUpgrade = dbGetBossUpgrade;
