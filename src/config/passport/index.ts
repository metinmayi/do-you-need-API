import passport from "passport";
import { Strategy } from "passport-local";
import bcryptjs from "bcryptjs";
import { IReceivedUser } from "../../models/IReceivedUser";
import { loginValidation } from "../../validations/authentication/loginValidation";
import { pool } from "../database/database";

const sql = "SELECT name, id, password FROM users WHERE name=?";

passport.use(
  new Strategy(async (username, password, done) => {
    if (!loginValidation(username, password)) {
      return done(null);
    }

    try {
      const user = (await pool.execute<IReceivedUser[]>(sql, [username]))[0][0];
      if (!user) {
        return done(null);
      }

      if (!matchingPasswords(password, user.password)) {
        return done(null);
      }

      return done(null, user);
    } catch (error) {
      console.log(error);
      if (!loginValidation)
        return done(error, "Couldn't connect to the database");
    }
  })
);

passport.serializeUser((user, done) => {
  return done(null, { name: user.name, id: user.id });
});

passport.deserializeUser(async (username: Express.User, done) => {
  const sql = "SELECT * FROM users WHERE name=?";
  try {
    const user = (
      await pool.execute<IReceivedUser[]>(sql, [username.name])
    )[0][0];
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

const matchingPasswords = async (incoming: string, actual: string) => {
  return await bcryptjs.compare(incoming, actual);
};

declare global {
  namespace Express {
    interface User {
      name: string;
      id: number;
    }
  }
}
