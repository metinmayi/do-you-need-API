import { ObjectId } from "mongoose";
import { UserModel } from "../../mongoose/schemas/UserSchema";

export const dbSaveAccessToken = async (accessToken: string, id: ObjectId) => {
  const _id = id.toString();
  await UserModel.updateOne({ _id }, { accessToken });
};
