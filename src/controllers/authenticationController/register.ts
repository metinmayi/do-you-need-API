import { Request, Response } from "express";
import { registrationValidation } from "../../validations/authenticationValidation/registrationValidation";
import { pool } from "../../database/database";
import bcrypt from "bcryptjs";
declare module "express-session" {
  interface SessionData {
    visits: number;
  }
}

const sql = "INSERT INTO users(username, password, email) VALUES (?, ?, ?)";

export const register = async (req: Request, res: Response) => {
  const isValid = registrationValidation(req);
  if (!isValid.success) {
    return res.status(400).send(isValid.message);
  }

  const userValues = await getSqlValues(req);
  try {
    await pool.execute(sql, userValues);
    return res.status(200).send("Registration Complete");
  } catch (error: any) {
    console.log("register" + error.sqlMessage);

    if (error.sqlMessage.includes("users.username")) {
      return res.status(403).send("Username is already in use.");
    }

    if (error.sqlMessage.includes("users.email"))
      return res.status(403).send("Email is already in use.");
  }

  res.sendStatus(500);
};

const getSqlValues = async (req: any) => {
  const hashedPassword = await getHashedPassword(req.body.password);

  const name = req.body.username.toLowerCase();
  const password = hashedPassword;
  const email = req.body.email.toLowerCase();

  return [name, password, email];
};

const getHashedPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
