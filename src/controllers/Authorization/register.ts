import { Request, Response } from "express";
import { registrationValidation } from "../../validations/authorization/registrationValidation";
import { pool } from "../../database";
import bcrypt from "bcryptjs";

const sql =
  "INSERT INTO users(name, password, usergroup, email, created) VALUES (?, ?, ?, ?, ?)";

export const registerUser = async (req: Request, res: Response) => {
  const isValid = registrationValidation(req);
  if (!isValid.success) {
    return res.status(400).send(isValid.message);
  }

  const userValues = await getSqlValues(req);
  try {
    await pool.execute(sql, userValues);
    return res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to query database");
  }
};

const getSqlValues = async (req: any) => {
  const hashedPassword = await getHashedPassword(req.body.password);

  const name = req.body.username;
  const password = hashedPassword;
  const email = req.body.email;
  const usergroup = "basic";
  const createdAt = Date.now();

  return [name, password, usergroup, email, createdAt];
};

const getHashedPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
