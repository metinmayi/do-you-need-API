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
exports.getCharacter = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Fetches information about the character from the Blizzard API
 * @param username Character's username
 * @param realm Character's realm
 * @param token User token
 * @returns
 */
function getCharacter(username, realm, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const URL = `https://eu.api.blizzard.com/profile/wow/character/${realm}/${username.toLowerCase()}?namespace=profile-eu&locale=en_EU&access_token=${token}`;
        const response = yield (0, axios_1.default)(URL);
        const data = response.data;
        return data;
    });
}
exports.getCharacter = getCharacter;
