import { ObjectId } from "mongoose";
import { IGuild } from "./IGuild";
import { IUser } from "./IUser";

export interface IReceivedUser extends IUser {
  _id: ObjectId;
  guilds: IGuild[];
}
