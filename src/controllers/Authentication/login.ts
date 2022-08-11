import { RowDataPacket } from "mysql2";
import { pool } from "../../config/database/database";
import { loginValidation } from "../../validations/authentication/loginValidation";
import bcryptjs from "bcryptjs";

interface IRetrievedPassword extends RowDataPacket {
  password: string;
}

type errRes = {
  error: null | boolean;
  success: boolean;
  message: string;
};

export const loginUser = async (username: string, password: string) => {
  const errorResponse: errRes = { error: null, success: false, message: "" };
  const isValid = loginValidation(username, password);
  if (!isValid.success) {
    errorResponse.message = "Invalid body";
    return errorResponse;
  }

  try {
    const dbPassword = await getUserPassword(username);
    const isMatch = await comparePasswords(password, dbPassword);
    if (isMatch) {
      errorResponse.message = "Successfully logged in.";
      errorResponse.success = true;
      return errorResponse;
    }

    errorResponse.message = "Wrong username/password";
    return errorResponse;
  } catch (error) {
    console.log(error);
    errorResponse.error = true;
    errorResponse.message = "Couldn't connect to the database";
    return errorResponse;
  }
};

const getUserPassword = async (username: string) => {
  const sql = "SELECT password FROM users WHERE name=?";
  const result = await pool.execute<IRetrievedPassword[]>(sql, [username]);
  const userPassword = result[0][0]?.password ?? "";
  return userPassword;
};

const comparePasswords = async (incoming: string, actual: string) => {
  return await bcryptjs.compare(incoming, actual);
};
