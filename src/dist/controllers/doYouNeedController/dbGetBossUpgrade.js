"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbGetBossUpgrade = void 0;
const database_1 = require("../../database/database");
/**
 * Receives upgrades from characters that belong to the guild
 * @param guildID The ID of the guild
 * @param bossName The boss's name
 * @returns {[] any} An array of the results
 */
async function dbGetBossUpgrade(guildID, bossName) {
    const SQL = `SELECT c.character_id as id, selected, boss_name, name, role, class, back,chest,feet,finger,hands,head,legs,main_hand,neck,off_hand,one_hand,shoulder,trinket,waist,wrist
    FROM characters c
    JOIN boss_upgrades bu ON bu.character_id = c.character_id 
    WHERE c.blizzard_guild_id = ? and bu.boss_name = ?;`;
    const result = await database_1.pool.execute(SQL, [guildID, bossName]);
    return result[0];
}
exports.dbGetBossUpgrade = dbGetBossUpgrade;
