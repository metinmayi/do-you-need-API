import { ObjectId } from "mongoose";
import { IGuild } from "./IGuild";

declare global {
  namespace Express {
    interface User {
      username: string;
      _id: ObjectId;
      accessToken: string;
      guilds: IGuild[];
    }
  }
}

export {};
