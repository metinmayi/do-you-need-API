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
const UserSchema_1 = require("../../mongoose/schemas/UserSchema");
/**
 * Login middleware
 */
passport_1.default.use(new passport_local_1.Strategy((username, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    username = username.toLocaleLowerCase();
    if (!(0, isValidLogin_1.isValidLogin)(username, password)) {
        return done(null);
    }
    try {
        const user = yield UserSchema_1.UserModel.findOne({ username });
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
        console.log("passport: " + error.message);
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
    try {
        const user = yield UserSchema_1.UserModel.findOne({ username });
        return done(null, user);
    }
    catch (err) {
        return done(err);
    }
}));
/**
 * Check if the requested password matches the one in the DB
 */
const isPasswordMatch = (reqPassword, dbHash) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcryptjs_1.default.compare(reqPassword, dbHash);
});
