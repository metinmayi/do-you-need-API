"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const authentication_1 = require("../../constants/authentication");
const registrationSchema = joi_1.default.object({
    username: joi_1.default.string().pattern(authentication_1.USERNAME_REGEX).required(),
    password: joi_1.default.string().pattern(authentication_1.PASSWORD_REGEX).required(),
    email: joi_1.default.string().email().required(),
});
const registrationValidation = (request) => {
    const result = registrationSchema.validate(request.body);
    if (result.error) {
        return { success: false, message: result.error.message };
    }
    return { success: true, message: "Valid" };
};
exports.registrationValidation = registrationValidation;
