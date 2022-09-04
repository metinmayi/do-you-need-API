import { ObjectId } from "mongoose";
import { UserModel } from "../../mongoose/schemas/UserSchema";

export const saveAccessToken = async (accessToken: string, id: ObjectId) => {
  const _id = id.toString();
  const result = await UserModel.updateOne({ _id }, { accessToken });
};
