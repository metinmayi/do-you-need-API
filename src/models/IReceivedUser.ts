import { RowDataPacket } from "mysql2";

export interface IReceivedUser extends RowDataPacket {
  id: number;
  name: string;
  password: string;
  email: string;
  guild: string;
  usergroup: string;
  createdAt: number;
  blizz_sync: number;
  accessToken: string;
}
