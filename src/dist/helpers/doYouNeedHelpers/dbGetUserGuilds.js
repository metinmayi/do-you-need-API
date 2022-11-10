"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbGetUserGuilds = void 0;
const database_1 = require("../../database/database");
/**
 * Gets an array of blizzard guild id's from the user's registered guilds
 * @param {number} userId The ID of the logged in user.
 * @returns {string[]} An array of the guild IDs
 */
async function dbGetUserGuilds(userId) {
    const SQL = "SELECT blizzard_guild_id, name, realm, license, faction FROM guilds WHERE blizzard_guild_id=(SELECT blizzard_guild_id FROM user_guilds WHERE user_id=?)";
    const guilds = await database_1.pool.execute(SQL, [userId]);
    return guilds[0];
}
exports.dbGetUserGuilds = dbGetUserGuilds;
