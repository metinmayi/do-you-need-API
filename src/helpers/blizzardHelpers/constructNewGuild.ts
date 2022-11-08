import { BlizzardRetrievedCharacter } from "../../models/BlizzardModels/BlizzardRetrievedCharacter";
import { INewGuild } from "../../models/INewGuild";

/**
 * Takes character information and constructs a new guild from it.
 * @param character The retrieved character from Blizzard's API
 * @returns {newGuild}
 */
export const constructNewGuild = (character: BlizzardRetrievedCharacter) => {
  const id = character.guild.id.toString();
  const name = character.guild.name;
  const realm = character.guild.realm.slug;
  const isNew = true;
  const faction = character.guild.faction.type;
  const license = "standard";
  const newGuild: INewGuild = {
    blizzard_guild_id: id,
    name,
    realm,
    isNew,
    faction,
    license,
  };
  return newGuild;
};
