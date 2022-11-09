import { pool } from "../../database/database";
import { IGuild } from "../../models/IGuild";

/**
 * Inserts a guild to the list of player's guilds.
 * @param username DoYouNeed username
 * @param guild Guild object
 * @param playerRank Rank of the player
 */
export async function dbAddGuildToUser(
  userID: number,
  guild: IGuild,
  playerRank: number = 3
) {
  const SQL =
    "INSERT INTO user_guilds(blizzard_guild_id, user_id, user_rank) VALUES(?, ?, ?)";
  await pool.execute(SQL, [guild.blizzard_guild_id, userID, playerRank]);
}
