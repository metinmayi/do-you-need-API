"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbAddGuildToUser = void 0;
const database_1 = require("../../database/database");
/**
 * Inserts a guild to the list of player's guilds.
 * @param username DoYouNeed username
 * @param guild Guild object
 * @param playerRank Rank of the player
 */
async function dbAddGuildToUser(userID, guild, playerRank = 3) {
    const SQL = "INSERT INTO user_guilds(blizzard_guild_id, user_id, user_rank) VALUES(?, ?, ?)";
    await database_1.pool.execute(SQL, [guild.blizzard_guild_id, userID, playerRank]);
}
exports.dbAddGuildToUser = dbAddGuildToUser;
