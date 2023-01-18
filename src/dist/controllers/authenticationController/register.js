"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const registrationValidation_1 = require("../../validations/authenticationValidation/registrationValidation");
const database_1 = require("../../database/database");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const sql = "INSERT INTO users(username, password, email) VALUES (?, ?, ?)";
const register = async (req, res) => {
    const isValid = (0, registrationValidation_1.registrationValidation)(req);
    if (!isValid.success) {
        return res.status(400).send(isValid.message);
    }
    const userValues = await getSqlValues(req);
    try {
        debugger;
        await database_1.pool.execute(sql, userValues);
        return res.status(200).send("Registration Complete");
    }
    catch (error) {
        console.log("register" + error.sqlMessage);
        if (error.sqlMessage.includes("users.username")) {
            return res.status(403).send("Username is already in use.");
        }
        if (error.sqlMessage.includes("users.email"))
            return res.status(403).send("Email is already in use.");
    }
    res.sendStatus(500);
};
exports.register = register;
const getSqlValues = async (req) => {
    const hashedPassword = await getHashedPassword(req.body.password);
    const name = req.body.username.toLowerCase();
    const password = hashedPassword;
    const email = req.body.email.toLowerCase();
    return [name, password, email];
};
const getHashedPassword = async (password) => {
    const salt = await bcryptjs_1.default.genSalt(10);
    const hashedPassword = await bcryptjs_1.default.hash(password, salt);
    return hashedPassword;
};
