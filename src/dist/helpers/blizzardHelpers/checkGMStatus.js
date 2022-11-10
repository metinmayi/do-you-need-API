"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkGMStatus = void 0;
/**
 * Checks if the request's user is the GM of the guild or not
 * @param roster Retrieved roster from Blizzard API
 * @param character Character name
 * @returns {boolean} Indicating whether the user is a GM or not
 */
async function checkGMStatus(roster, character) {
    const isGM = roster.some((member) => member.character.name.toLowerCase() === character && member.rank === 0);
    return isGM;
}
exports.checkGMStatus = checkGMStatus;
