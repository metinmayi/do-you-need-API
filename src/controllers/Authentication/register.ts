import { Request, Response } from "express";
import { registrationValidation } from "../../validations/authentication/registrationValidation";
import { pool } from "../../config/database/database";
import bcrypt from "bcryptjs";
declare module "express-session" {
  interface SessionData {
    visits: number;
  }
}

const sql =
  "INSERT INTO users(name, password, email, createdAt) VALUES (?, ?, ?, ?)";

export const registerUser = async (req: Request, res: Response) => {
  const isValid = registrationValidation(req);
  if (!isValid.success) {
    return res.status(400).send(isValid.message);
  }

  const userValues = await getSqlValues(req);
  try {
    await pool.execute(sql, userValues);
    return res.status(200).send("Registration Complete");
  } catch (error: any) {
    console.log(error.sqlMessage);
    res.status(500).send(error.sqlMessage || "Failed to query database");
  }
};

const getSqlValues = async (req: any) => {
  const hashedPassword = await getHashedPassword(req.body.password);

  const name = req.body.username.toLowerCase();
  const password = hashedPassword;
  const email = req.body.email.toLowerCase();
  const createdAt = Date.now();

  return [name, password, email, createdAt];
};

const getHashedPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
