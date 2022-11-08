import { pool } from "../../database/database";
import { IGuild } from "../../models/IGuild";
import { GuildModel } from "../../mongoose/schemas/GuildSchema";

/**
 * Breaks down information about a guild into a DYN IGuild and saves it in the DB.
 * @param {IGuild} guild A guild object
 * @returns void
 */
export async function dbStoreGuild(guild: IGuild) {
  const SQL =
    "INSERT INTO guilds (blizzard_guild_id, name, realm, license, faction) VALUES (?, ?, ?, ?, ?)";
  const result = pool.execute(SQL, [
    guild.blizzard_guild_id,
    guild.name,
    guild.realm,
    guild.license,
    guild.faction,
  ]);
}
