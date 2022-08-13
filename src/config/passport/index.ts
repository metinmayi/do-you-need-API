import passport from "passport";
import { Strategy } from "passport-local";
import bcryptjs from "bcryptjs";
import { IReceivedUser } from "../../models/IReceivedUser";
import { isValidLogin } from "../../validations/authentication/isValidLogin";
import { pool } from "../database/database";

const sql = "SELECT name, id, password FROM users WHERE name=?";

/**
 * Login middleware
 */
passport.use(
  new Strategy(async (username, password, done) => {
    if (!isValidLogin(username, password)) {
      return done(null);
    }

    try {
      const user = (await pool.execute<IReceivedUser[]>(sql, [username]))[0][0];
      if (!user) {
        return done(null);
      }

      const isMatching = await isPasswordMatch(password, user.password);
      if (!isMatching) {
        return done(null);
      }

      return done(null, user);
    } catch (error) {
      console.log(error);
      return done(error, "Couldn't connect to the database");
    }
  })
);

/**
 * Assign passport properties
 */
passport.serializeUser((user, done) => {
  return done(null, user.name);
});

/**
 * Query DB by with above passport, and return session user
 */
passport.deserializeUser(async (username: string, done) => {
  const sql = "SELECT * FROM users WHERE name=?";
  try {
    const user = (await pool.execute<IReceivedUser[]>(sql, [username]))[0][0];
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

/**
 * Check if the requested password matches the one in the DB
 */
const isPasswordMatch = async (reqPassword: string, dbHash: string) => {
  return await bcryptjs.compare(reqPassword, dbHash);
};

declare global {
  namespace Express {
    interface User {
      name: string;
      id: number;
    }
  }
}
