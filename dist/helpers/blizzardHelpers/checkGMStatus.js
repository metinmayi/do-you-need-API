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
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkGMStatus = void 0;
/**
 * Checks if the request's user is the GM of the guild or not
 * @param roster Retrieved roster from Blizzard API
 * @param character Character name
 * @returns {boolean} Indicating whether the user is a GM or not
 */
function checkGMStatus(roster, character) {
    return __awaiter(this, void 0, void 0, function* () {
        const isGM = roster.some((member) => member.character.name.toLowerCase() === character && member.rank === 0);
        return isGM;
    });
}
exports.checkGMStatus = checkGMStatus;
