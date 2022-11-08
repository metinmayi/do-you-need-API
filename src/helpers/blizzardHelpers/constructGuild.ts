import { BlizzardRetrievedGuild } from "../../models/BlizzardModels/BlizzardRetrievedGuild";
import { IGuild } from "../../models/IGuild";

export function constructGuild(guildInformation: BlizzardRetrievedGuild) {
  const guild: IGuild = {
    blizzard_guild_id: guildInformation.id.toString(),
    name: guildInformation.name,
    realm: guildInformation.realm.slug,
    license: "standard",
    faction: guildInformation.faction.type,
  };
  return guild;
}
