import { BlizzardRetrievedCharacter } from "../../models/BlizzardModels/BlizzardRetrievedCharacter";
import { INewGuild } from "../../models/INewGuild";

export const constructNewGuild = (player: BlizzardRetrievedCharacter) => {
  const id = player.guild.id.toString();
  const name = player.guild.name;
  const realm = player.guild.realm.slug;
  const isNew = true;
  const faction = player.guild.faction.type;
  const license = "standard";
  const newGuild: INewGuild = { id, name, realm, isNew, faction, license };
  return newGuild;
};
