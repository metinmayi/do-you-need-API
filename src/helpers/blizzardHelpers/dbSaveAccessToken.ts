import { pool } from "../../database/database";

/**
 * Saves an accesstoken to the user in the database
 * @param accessToken Newly retrieved accessToken from Blizzard's API.
 * @param id ID of the user in the DB
 */
export const dbSaveAccessToken = async (accessToken: string, id: number) => {
  const SQL = "UPDATE users SET access_token=? WHERE id=?";
  const result = await pool.execute(SQL, [accessToken, id]);
  console.log("Saved access token: " + result.toString());
};
