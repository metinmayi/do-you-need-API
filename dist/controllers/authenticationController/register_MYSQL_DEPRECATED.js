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
exports.registerUser = void 0;
const registrationValidation_1 = require("../../validations/authenticationValidation/registrationValidation");
const database_1 = require("../../database/database");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const sql = "INSERT INTO users(name, password, email, createdAt) VALUES (?, ?, ?, ?)";
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const isValid = (0, registrationValidation_1.registrationValidation)(req);
    if (!isValid.success) {
        return res.status(400).send(isValid.message);
    }
    const userValues = yield getSqlValues(req);
    try {
        yield database_1.pool.execute(sql, userValues);
        return res.status(200).send("Registration Complete");
    }
    catch (error) {
        console.log("register_MYSQL_DEPRECATED" + error.sqlMessage);
        res.status(500).send(error.sqlMessage || "Failed to query database");
    }
});
exports.registerUser = registerUser;
const getSqlValues = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield getHashedPassword(req.body.password);
    const name = req.body.username.toLowerCase();
    const password = hashedPassword;
    const email = req.body.email.toLowerCase();
    const createdAt = Date.now();
    return [name, password, email, createdAt];
});
const getHashedPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    return hashedPassword;
});
