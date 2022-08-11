import passport from "passport";
import { IVerifyOptions, Strategy } from "passport-local";
import { loginUser } from "../../controllers/Authentication/login";
import { pool } from "../database/database";

const verifyCallback = async (
  username: string,
  password: string,
  done: (error: any, user?: any, options?: IVerifyOptions) => void
) => {
  const result = await loginUser(username, password);
  if (result.success) return done(result.error, username);
  if (result.error) return done(result.error);
  return done(result.error, result.success);
};

passport.use(new Strategy(verifyCallback));

passport.serializeUser((user, done) => {
  return done(null, user);
});

passport.deserializeUser(async (user: string, done) => {
  const sql = "SELECT * FROM users WHERE name=?";
  try {
    const result = await pool.execute(sql, [user]);
    return done(null, result[0]);
  } catch (err) {
    return done(err);
  }
});
