import mongoose, { Model } from "mongoose";
import { IGuild } from "../../models/IGuild";

const guildSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  realm: { type: String, required: true },
  license: { type: String, required: true },
  faction: { type: String, required: true },
  characters: { type: Array<any>, required: true },
});

export const GuildModel: typeof Model<IGuild> = mongoose.model(
  "guilds",
  guildSchema
);
