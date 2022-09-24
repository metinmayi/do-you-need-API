import { IGuild } from "../../models/IGuild";
import { GuildModel } from "../../mongoose/schemas/GuildSchema";

/**
 * Breaks down information about a guild into a DYN IGuild and saves it in the DB.
 * @param guildInformation Retrieved guildinformation from Blizzard's API.
 * @returns {IGuild}
 */
export async function dbStoreGuild(guildInformation: any) {
  const guild: IGuild = {
    name: guildInformation.data.name.toLowerCase(),
    realm: guildInformation.data.realm.slug.toLowerCase(),
    id: guildInformation.data.id.toString(),
    faction: guildInformation.data.faction.type.toLowerCase(),
    license: "standard",
  };
  await GuildModel.create(guild);
  return guild;
}
