"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbGetGuildByBlizzardId = void 0;
const database_1 = require("../../database/database");
/**
 * Gets the guild from the database.
 * @param {string} id The guild's blizzard ID.
 * @returns
 */
const dbGetGuildByBlizzardId = async (id) => {
    const SQL = "SELECT blizzard_guild_id, name, realm, license, faction FROM guilds WHERE blizzard_guild_id=?";
    const response = await database_1.pool.execute(SQL, [id]);
    return response[0][0];
};
exports.dbGetGuildByBlizzardId = dbGetGuildByBlizzardId;
