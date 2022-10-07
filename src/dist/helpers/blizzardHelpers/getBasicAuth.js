"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBasicAuth = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/**
 * Basic authentication has to haave the credentials encrypted in base64.
 * This function returns the encrypted and formatted value
 */
const getBasicAuth = () => {
    const clientId = process.env.BLIZZARD_CLIENT_ID || "";
    const clientSecret = process.env.BLIZZARD_CLIENT_SECRET || "";
    const buffer = Buffer.from(`${clientId}:${clientSecret}`);
    const encrypted = buffer.toString("base64");
    return `Basic ${encrypted}`;
};
exports.getBasicAuth = getBasicAuth;
