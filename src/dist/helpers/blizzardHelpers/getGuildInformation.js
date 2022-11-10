"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGuildInformation = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Fetches information about the guild from Blizzard's API
 * @param realm Guild's realm
 * @param guildName Guild's name
 * @param token User's accessToken
 * @returns Information about the guild, received from Blizzard
 */
async function getGuildInformation(realm, guildName, token) {
    const formattedGuildName = guildName.replaceAll(" ", "-");
    const response = await (0, axios_1.default)(`https://eu.api.blizzard.com/data/wow/guild/${realm}/${formattedGuildName.toLowerCase()}?namespace=profile-eu&locale=en_EU&access_token=${token}`);
    const guildInformation = response.data;
    return guildInformation;
}
exports.getGuildInformation = getGuildInformation;
