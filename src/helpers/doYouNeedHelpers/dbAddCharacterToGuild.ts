import { ICharacter } from "../../models/doYouNeed/ICharacter";
import { IGuild } from "../../models/IGuild";
import { GuildModel } from "../../mongoose/schemas/GuildSchema";

/**
 * Takes a character and inserts it into the guild's characters
 * @param {ICharacter} character Character object
 * @param {IGuild} guild Guild Object
 */
export async function dbAddCharacterToGuild(
  character: ICharacter,
  guild: IGuild
) {
  try {
    await GuildModel.updateOne(
      { id: guild.blizzard_guild_id },
      { $push: { characters: character } }
    );
  } catch (error: any) {
    console.log({ dbAddCharacterToGuild: error });
  }
}
