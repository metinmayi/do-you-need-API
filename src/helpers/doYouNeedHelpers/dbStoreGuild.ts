import { IGuild } from "../../models/IGuild";
import { GuildModel } from "../../mongoose/schemas/GuildSchema";

/**
 * Breaks down information about a guild into a DYN IGuild and saves it in the DB.
 * @param {IGuild} guild A guild object
 * @returns void
 */
export async function dbStoreGuild(guild: IGuild) {
  await GuildModel.create(guild);
}
