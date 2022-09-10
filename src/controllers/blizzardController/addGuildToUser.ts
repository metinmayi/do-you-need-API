import { UserModel } from "../../mongoose/schemas/UserSchema";

export async function addGuildToUser(guildID: any, username: any, rank: any) {
  const guild = {
    guildID,
    rank,
  };
  await UserModel.updateOne(
    { username },
    { $push: { guilds: guild } }
  )
}
