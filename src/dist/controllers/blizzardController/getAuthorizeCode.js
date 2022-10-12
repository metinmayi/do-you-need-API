"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthorizeCode = void 0;
const constants_1 = require("../../constants");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const clientId = process.env.BLIZZARD_CLIENT_ID || "";
const AuthEndpoint = `${constants_1.AUTHORIZE_URL}?region=${constants_1.WOW_REGION}&response_type=code&client_id=${clientId}&redirect_uri=${constants_1.REDIRECT_URI}&scope=${constants_1.WOW_SCOPE}`;
/**
 * Entry point for the blizzard authentication chain.
 * @param req Express Request
 * @param res Express Response
 */
const getAuthorizeCode = (req, res) => {
    res.redirect(AuthEndpoint);
};
exports.getAuthorizeCode = getAuthorizeCode;
