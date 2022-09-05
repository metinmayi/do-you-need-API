import { ObjectId } from "mongoose";
import { IUser } from "./IUser";

export interface IReceivedUser extends IUser {
  _id: ObjectId;
  guilds: number[];
}
