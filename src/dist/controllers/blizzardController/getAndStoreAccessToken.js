"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAndStoreAccessToken = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../../constants");
const getBasicAuth_1 = require("../../helpers/blizzardHelpers/getBasicAuth");
const dbSaveAccessToken_1 = require("../../helpers/blizzardHelpers/dbSaveAccessToken");
/**
 * Gets a new user access token from blizzard API and stores it in the user's table.
 * @param req Express Request - Code is in the query
 * @param res Express Response
 */
const getAndStoreAccessToken = async (req, res) => {
    const { code } = req.query;
    const userId = req.user?.id;
    if (typeof code !== "string") {
        res.status(401).json({ message: "Invalid code received" });
        return;
    }
    if (!userId) {
        res.status(401).json({ message: "Invalid user id" });
        return;
    }
    const Authorization = (0, getBasicAuth_1.getBasicAuth)();
    try {
        const response = await (0, axios_1.default)(constants_1.GET_TOKEN_URL, {
            method: "post",
            headers: {
                Authorization,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: `redirect_uri=${constants_1.REDIRECT_URI}&grant_type=authorization_code&code=${code}`,
        });
        const token = response.data.access_token;
        await (0, dbSaveAccessToken_1.dbSaveAccessToken)(token, userId);
        res.redirect(constants_1.SYNC_URL);
    }
    catch (error) {
        console.log("getAndStoreAccessToken: " + error.message);
        res.redirect(constants_1.SYNC_URL);
    }
};
exports.getAndStoreAccessToken = getAndStoreAccessToken;
