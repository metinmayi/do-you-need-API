"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacters = void 0;
const axios_1 = __importDefault(require("axios"));
const getMaxLevelCharacters_1 = require("../../helpers/blizzardHelpers/getMaxLevelCharacters");
/**
 * Get's the max level characters from a user's account. This will check through all of their WoW accounts.
 * @param req Express Request
 * @param res Express Response
 */
const getCharacters = async (req, res) => {
    const token = req.user?.access_token;
    if (!token) {
        res.status(401).json({ message: "User does not have a valid accessToken" });
    }
    try {
        const result = await (0, axios_1.default)(`https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_EU&access_token=${token}`);
        const retrievedUser = result.data;
        const maxLevelChars = (0, getMaxLevelCharacters_1.getMaxLevelCharacters)(retrievedUser.wow_accounts);
        res.status(200).json(maxLevelChars);
    }
    catch (error) {
        res.sendStatus(500);
        console.log("getCharacters:" + error.message);
    }
};
exports.getCharacters = getCharacters;
