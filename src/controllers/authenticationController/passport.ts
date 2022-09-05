import passport from "passport";
import { Strategy } from "passport-local";
import bcryptjs from "bcryptjs";
import { isValidLogin } from "../../validations/authenticationValidation/isValidLogin";
import "../../models/ExpressUser";
import { UserModel } from "../../mongoose/schemas/UserSchema";
import { IReceivedUser } from "../../models/IReceivedUser";

/**
 * Login middleware
 */
passport.use(
  new Strategy(async (username, password, done) => {
    if (!isValidLogin(username, password)) {
      return done(null);
    }

    try {
      const user: IReceivedUser | null = await UserModel.findOne({ username });
      if (!user) {
        return done(null);
      }

      const isMatching = await isPasswordMatch(password, user.password);
      if (!isMatching) {
        return done(null);
      }

      return done(null, user);
    } catch (error: any) {
      console.log("passport: " + error.message);
      return done(error, "Couldn't connect to the database");
    }
  })
);

/**
 * Assign passport properties
 */
passport.serializeUser((user, done) => {
  return done(null, user.username);
});

/**
 * Query DB by with above passport, and return session user
 */
passport.deserializeUser(async (username: string, done) => {
  try {
    const user: IReceivedUser | null = await UserModel.findOne({ username });
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
