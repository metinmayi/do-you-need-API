import { Request, Response } from "express";
import { registrationValidation } from "../../validations/authenticationValidation/registrationValidation";
import bcrypt from "bcryptjs";
import { UserModel } from "../../mongoose/schemas/UserSchema";
import { IUser } from "../../models/IUser";
declare module "express-session" {
  interface SessionData {
    visits: number;
  }
}

export const register = async (req: Request, res: Response) => {
  const isValid = registrationValidation(req);
  if (!isValid.success) {
    return res.status(400).send(isValid.message);
  }

  try {
    const User = await constructUser(req);
    const result = await User.save();

    return res.status(200).send("Registration Complete");
  } catch (error: any) {
    console.log("register: " + error._message);
    res.status(500).send(error._message || "Failed to query database");
  }
};

const constructUser = async (req: any) => {
  const username = req.body.username.toLowerCase();
  const password = await getHashedPassword(req.body.password);
  const email = req.body.email.toLowerCase();
  const newUser = new IUser(username, password, email);
  const User = new UserModel(newUser);

  return User;
};

const getHashedPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
