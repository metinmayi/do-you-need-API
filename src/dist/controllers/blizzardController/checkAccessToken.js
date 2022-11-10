"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAccessToken = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../../constants");
/**
 * Checks the user's accessToken and validates it towards blizzard's API.
 * @param req Express Request
 * @param res Express Response
 * @returns void
 */
const checkAccessToken = async (req, res) => {
    const token = req.user?.access_token;
    if (!token) {
        res
            .status(403)
            .json({ message: "User does not have an active accessToken" });
        return;
    }
    try {
        const result = await (0, axios_1.default)(constants_1.CHECK_TOKEN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: `region=${constants_1.WOW_REGION}&token=${token}`,
        });
        res.sendStatus(result.status);
    }
    catch (error) {
        console.log("checkAccessToken: " + error.message);
        res.status(error.response.status || 500).send(error.message);
    }
};
exports.checkAccessToken = checkAccessToken;
