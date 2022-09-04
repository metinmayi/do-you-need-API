import mongoose from "mongoose";
import { IGuild } from "../../models/IGuild";

const userSchema = new mongoose.Schema<IGuild>({
  guildId: { type: Number, required: true },
});

export const GuildModel = mongoose.model("guilds", userSchema);
