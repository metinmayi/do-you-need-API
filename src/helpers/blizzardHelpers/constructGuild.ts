import { BlizzardRetrievedGuild } from "../../models/BlizzardModels/BlizzardRetrievedGuild";
import { IGuild } from "../../models/IGuild";

export function constructGuild(guildInformation: BlizzardRetrievedGuild) {
  const guild: IGuild = {
    id: guildInformation.id.toString(),
    name: guildInformation.name,
    realm: guildInformation.realm.slug,
    license: "standard",
    faction: guildInformation.faction.type,
    characters: [],
  };
  return guild;
}
