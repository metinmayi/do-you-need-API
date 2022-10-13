import { pool } from "../../database/database";

/**
 * Registers a user to a guild in the DB.
 * @param {string} guildID Blizzard ID for the guild
 * @param {number} userId The user's ID.
 * @param {number} userRank The rank of the user
 */
export async function dbStoreUserGuild(
  guildID: string,
  userId: number,
  userRank: number
) {
  const SQL =
    "INSERT INTO user_guilds(blizzard_id, user_id, user_rank) VALUES(?, ?, ?)";
  await pool.execute(SQL, [guildID, userId, userRank]);
}
