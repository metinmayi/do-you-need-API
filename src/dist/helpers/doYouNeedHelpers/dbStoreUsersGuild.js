"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbStoreUserGuild = void 0;
const database_1 = require("../../database/database");
/**
 * Registers a user to a guild in the DB.
 * @param {string} guildID Blizzard ID for the guild
 * @param {number} userId The user's ID.
 * @param {number} userRank The rank of the user
 */
async function dbStoreUserGuild(guildID, userId, userRank) {
    const SQL = "INSERT INTO user_guilds(blizzard_guild_id, user_id, user_rank) VALUES(?, ?, ?)";
    await database_1.pool.execute(SQL, [guildID, userId, userRank]);
}
exports.dbStoreUserGuild = dbStoreUserGuild;
