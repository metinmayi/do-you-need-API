"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacter = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Fetches information about the character from the Blizzard API
 * @param username Character's username
 * @param realm Character's realm
 * @param token User token
 * @returns
 */
async function getCharacter(username, realm, token) {
    const URL = `https://eu.api.blizzard.com/profile/wow/character/${realm}/${username.toLowerCase()}?namespace=profile-eu&locale=en_EU&access_token=${token}`;
    const response = await (0, axios_1.default)(URL);
    const data = response.data;
    return data;
}
exports.getCharacter = getCharacter;
