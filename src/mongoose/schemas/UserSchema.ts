import mongoose from "mongoose";
import { IUser } from "../../models/IUser";

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Number, required: true },
  guilds: {
    type: [],
    required: false,
    set: (a: any) => (a === "" ? undefined : a),
  },
  accessToken: {
    type: String,
    required: false,
    set: (a: any) => (a === [] ? undefined : a),
  },
});

export const UserModel = mongoose.model("users", userSchema);
