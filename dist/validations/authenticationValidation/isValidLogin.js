"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidLogin = void 0;
const joi_1 = __importDefault(require("joi"));
const authentication_1 = require("../../constants/authentication");
const registrationSchema = joi_1.default.object({
    username: joi_1.default.string().pattern(authentication_1.USERNAME_REGEX).required(),
    password: joi_1.default.string().pattern(authentication_1.PASSWORD_REGEX).required(),
});
/**
 * Checks if the requested username and password match the regex.
 */
const isValidLogin = (username, password) => {
    const result = registrationSchema.validate({
        username,
        password,
    });
    if (result.error) {
        return false;
    }
    return true;
};
exports.isValidLogin = isValidLogin;
