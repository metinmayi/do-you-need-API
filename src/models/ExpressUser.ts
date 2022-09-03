import { ObjectId } from "mongoose";

declare global {
  namespace Express {
    interface User {
      username: string;
      _id: ObjectId;
      accessToken: string;
    }
  }
}

export {};
