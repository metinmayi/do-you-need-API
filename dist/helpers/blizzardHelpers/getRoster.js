"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function getRoster(URL, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, axios_1.default)(`${URL}&access_token=${token}`);
        const roster = response.data.members;
        return roster;
    });
}
exports.getRoster = getRoster;
