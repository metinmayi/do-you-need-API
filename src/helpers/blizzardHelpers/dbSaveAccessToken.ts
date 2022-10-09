import { UserModel } from "../../mongoose/schemas/UserSchema";

/**
 * Saves an accesstoken to the user in the database
 * @param accessToken Newly retrieved accessToken from Blizzard's API.
 * @param id ID of the user in the DB
 */
export const dbSaveAccessToken = async (accessToken: string, id: number) => {
  const _id = id.toString();
  await UserModel.updateOne({ _id }, { accessToken });
};
