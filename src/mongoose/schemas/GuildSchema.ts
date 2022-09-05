import mongoose from "mongoose";
import { IGuild } from "../../models/IGuild";

const guildSchema = new mongoose.Schema<IGuild>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  realm: { type: String, required: true },
  status: { type: Boolean, required: true },
});

export const GuildModel = mongoose.model("guilds", guildSchema);
