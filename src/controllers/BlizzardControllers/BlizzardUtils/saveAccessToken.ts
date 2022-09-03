import { ObjectId } from "mongoose";
import { pool } from "../../../database/database";
const SQL = "UPDATE users SET accessToken=? WHERE id=?";

export const saveAccessToken = async (
  token: string,
  userId: ObjectId | undefined
) => {
  const insertion = await pool.execute(SQL, [token, userId]);
  console.log(insertion);
};
