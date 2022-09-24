import { IGuild } from "../../models/IGuild";
import { IUserGuild } from "../../models/IUserGuild";
import { UserModel } from "../../mongoose/schemas/UserSchema";

export async function dbAddGuildToUser(
  username: any,
  guild: IGuild,
  playerRank: string
) {
  const userGuild: IUserGuild = { ...guild, playerRank };

  await UserModel.updateOne({ username }, { $push: { guilds: userGuild } });
}
