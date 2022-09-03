import mongoose from "mongoose";
import { IUser } from "../../models/IUser";

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Number, required: true },
});

export const UserModel = mongoose.model("users", userSchema);
