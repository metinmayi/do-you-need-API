"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoster = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Get's the guild's roster from the Blizzard API.
 * @param URL Roster URL. Retrieved from Blizzard's guild API.
 * @param token User's accessToken
 * @returns The guild's roster.
 */
async function getRoster(URL, token) {
    const response = await (0, axios_1.default)(`${URL}&access_token=${token}`);
    const roster = response.data.members;
    return roster;
}
exports.getRoster = getRoster;
