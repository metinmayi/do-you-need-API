import { GuildModel } from "../../mongoose/schemas/GuildSchema";

export const dbGuildStatus = async (id: number) => {
  try {
    const result = await GuildModel.findOne({ id }).lean();
    return result;
  } catch (error: any) {
    console.log("dbGuildStatis: " + error.message);
  }
};
