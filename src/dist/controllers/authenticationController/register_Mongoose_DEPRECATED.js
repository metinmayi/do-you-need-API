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
exports.register = void 0;
const registrationValidation_1 = require("../../validations/authenticationValidation/registrationValidation");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema_1 = require("../../mongoose/schemas/UserSchema");
const IUser_1 = require("../../models/IUser");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const isValid = (0, registrationValidation_1.registrationValidation)(req);
    if (!isValid.success) {
        return res.status(400).send(isValid.message);
    }
    try {
        const User = yield constructUser(req);
        const result = yield User.save();
        return res.status(200).send("Registration Complete");
    }
    catch (error) {
        console.log("register: " + error._message);
        res.status(500).send(error._message || "Failed to query database");
    }
});
exports.register = register;
const constructUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username.toLowerCase();
    const password = yield getHashedPassword(req.body.password);
    const email = req.body.email.toLowerCase();
    const newUser = new IUser_1.IUser(username, password, email);
    const User = new UserSchema_1.UserModel(newUser);
    return User;
});
const getHashedPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    return hashedPassword;
});
