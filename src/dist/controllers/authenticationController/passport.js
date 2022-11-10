"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const isValidLogin_1 = require("../../validations/authenticationValidation/isValidLogin");
require("../../models/ExpressUser");
const database_1 = require("../../database/database");
const sql = "SELECT username, id, password FROM users WHERE username=?";
/**
 * Login middleware
 */
passport_1.default.use(new passport_local_1.Strategy(async (username, password, done) => {
    username = username.toLocaleLowerCase();
    if (!(0, isValidLogin_1.isValidLogin)(username, password)) {
        return done(null);
    }
    try {
        const user = (await database_1.pool.execute(sql, [username]))[0][0];
        if (!user) {
            return done(null);
        }
        const isMatching = await isPasswordMatch(password, user.password);
        if (!isMatching) {
            return done(null);
        }
        return done(null, user);
    }
    catch (error) {
        console.log("passport.use: " + error.message);
        return done(error, "Couldn't connect to the database");
    }
}));
/**
 * Assign passport properties
 */
passport_1.default.serializeUser((user, done) => {
    return done(null, user.username);
});
/**
 * Query DB by with above passport, and return session user
 */
passport_1.default.deserializeUser(async (username, done) => {
    const sql = "SELECT * FROM users WHERE username=?";
    try {
        const user = (await database_1.pool.execute(sql, [username]))[0][0];
        return done(null, user);
    }
    catch (err) {
        console.log({ "passport.deserializeUser": err });
        return done(err);
    }
});
/**
 * Check if the requested password matches the one in the DB
 */
const isPasswordMatch = async (reqPassword, dbHash) => {
    return await bcryptjs_1.default.compare(reqPassword, dbHash);
};
