import { IGuild } from "../../models/IGuild";
import { IUserGuild } from "../../models/IUserGuild";
import { UserModel } from "../../mongoose/schemas/UserSchema";

/**
 * Inserts a guild to the list of player's guilds.
 * @param username DoYouNeed username
 * @param guild Guild object
 * @param playerRank Rank of the player
 */
export async function dbAddGuildToUser(
  username: any,
  guild: IGuild,
  playerRank: string
) {
  const userGuild: IUserGuild = { ...guild, playerRank };

  await UserModel.updateOne({ username }, { $push: { guilds: userGuild } });
}
