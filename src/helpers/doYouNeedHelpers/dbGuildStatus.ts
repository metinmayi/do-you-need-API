import { GuildModel } from "../../mongoose/schemas/GuildSchema";

export const dbGuildStatus = async (guildId: number) => {
  try {
    const result = await GuildModel.findOne({ guildId }).lean();
    return result;
  } catch (error: any) {
    console.log("dbGuildStatis: " + error.message);
  }
};
