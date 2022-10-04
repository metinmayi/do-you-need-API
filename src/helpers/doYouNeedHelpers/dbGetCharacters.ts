import { IGuild } from "../../models/IGuild";
import { GuildModel } from "../../mongoose/schemas/GuildSchema";

/**
 * Takes a guild ID and returns the guild
 * @param guildID ID of the guild
 * @returns {IGuild} The guild
 */
export async function dbGetCharacters(guildID: string) {
  const foundGuild = await GuildModel.findOne({ id: guildID }).lean();
  return foundGuild;
}
