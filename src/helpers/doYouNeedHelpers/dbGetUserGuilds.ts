import { pool } from "../../database/database";

/**
 * Gets an array of blizzard guild id's from the user's registered guilds
 * @param {number} userId The ID of the logged in user.
 * @returns {string[]} An array of the guild IDs
 */
export async function dbGetUserGuilds(userId: number) {
  const SQL = "SELECT blizzard_guild_id FROM user_guilds WHERE user_id=?";
  const guilds = await pool.execute(SQL, [userId]);
  return guilds[0];
}
