import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import { pool } from "../../database";
import { loginValidation } from "../../validations/authentication/loginValidation";
import bcryptjs from "bcryptjs";

interface IRetrievedPassword extends RowDataPacket {
  password: string;
}

export const loginUser = async (req: Request, res: Response) => {
  const isValid = loginValidation(req);
  if (!isValid.success) {
    return res.status(400).send(isValid.message);
  }

  try {
    const incomingPassword = req.body.password;
    const actualPassword = await getUserPassword(req.body.username);
    const isMatch = await comparePasswords(incomingPassword, actualPassword);

    if (isMatch) {
      return res.status(200).send("Login successful");
    }

    return res.status(401).send("Wrong username/password");
  } catch (error) {
    console.log(error);
  }
};

const getUserPassword = async (username: string) => {
  const sql = "SELECT password FROM users WHERE name=?";
  const result = await pool.execute<IRetrievedPassword[]>(sql, [username]);
  return result[0][0].password;
};

const comparePasswords = async (incoming: string, actual: string) => {
  return await bcryptjs.compare(incoming, actual);
};
