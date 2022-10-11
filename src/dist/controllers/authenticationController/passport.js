"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
passport_1.default.use(new passport_local_1.Strategy((username, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    username = username.toLocaleLowerCase();
    if (!(0, isValidLogin_1.isValidLogin)(username, password)) {
        return done(null);
    }
    try {
        const user = (yield database_1.pool.execute(sql, [username]))[0][0];
        if (!user) {
            return done(null);
        }
        const isMatching = yield isPasswordMatch(password, user.password);
        if (!isMatching) {
            return done(null);
        }
        return done(null, user);
    }
    catch (error) {
        console.log("passport.use: " + error.message);
        return done(error, "Couldn't connect to the database");
    }
})));
/**
 * Assign passport properties
 */
passport_1.default.serializeUser((user, done) => {
    return done(null, user.username);
});
/**
 * Query DB by with above passport, and return session user
 */
passport_1.default.deserializeUser((username, done) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = "SELECT * FROM users WHERE username=?";
    try {
        const user = (yield database_1.pool.execute(sql, [username]))[0][0];
        return done(null, user);
    }
    catch (err) {
        console.log({ "passport.deserializeUser": err });
        return done(err);
    }
}));
/**
 * Check if the requested password matches the one in the DB
 */
const isPasswordMatch = (reqPassword, dbHash) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcryptjs_1.default.compare(reqPassword, dbHash);
});
