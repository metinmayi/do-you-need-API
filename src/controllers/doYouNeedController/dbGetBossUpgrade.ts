import { pool } from "../../database/database";

/**
 * Receives upgrades from characters that belong to the guild
 * @param guildID The ID of the guild
 * @param bossName The boss's name
 * @returns {[] any} An array of the results
 */
export async function dbGetBossUpgrade(guildID: string, bossName: string) {
  const SQL = `SELECT c.character_id as id, selected, boss_name, name, role, class, head, shoulder, chest, wrist, hands, waist, legs, feet, neck, back, finger, trinket, main_hand, one_hand, off_hand
    FROM characters c
    JOIN boss_upgrades bu ON bu.character_id = c.character_id 
    WHERE c.blizzard_guild_id = ? and bu.boss_name = ?;`;

  const result = await pool.execute(SQL, [guildID, bossName]);
  return result[0];
}
