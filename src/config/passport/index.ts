import passport from "passport";
import { Strategy } from "passport-local";
import { pool } from "../database/database";

passport.use(new Strategy((username, password, cb) => {}));
