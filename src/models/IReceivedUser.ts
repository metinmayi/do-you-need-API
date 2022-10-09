// import { ObjectId } from "mongoose";
// import { IGuild } from "./IGuild";
// import { IUser } from "./IUser";

// export interface IReceivedUser extends IUser {
//   _id: ObjectId;
//   guilds: IGuild[];
// }
import { RowDataPacket } from "mysql2";

export interface IReceivedUser extends RowDataPacket {
  id: number;
  username: string;
  password: string;
  email: string;
  created_at: string;
  access_token: string;
}
