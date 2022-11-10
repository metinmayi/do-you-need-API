"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbStoreGuild = void 0;
const database_1 = require("../../database/database");
/**
 * Breaks down information about a guild into a DYN IGuild and saves it in the DB.
 * @param {IGuild} guild A guild object
 * @returns void
 */
async function dbStoreGuild(guild) {
    const SQL = "INSERT INTO guilds (blizzard_guild_id, name, realm, license, faction) VALUES (?, ?, ?, ?, ?)";
    const result = database_1.pool.execute(SQL, [
        guild.blizzard_guild_id,
        guild.name,
        guild.realm,
        guild.license,
        guild.faction,
    ]);
}
exports.dbStoreGuild = dbStoreGuild;
