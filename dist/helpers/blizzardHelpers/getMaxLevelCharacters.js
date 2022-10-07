"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxLevelCharacters = void 0;
const constants_1 = require("../../constants");
/**
 * Takes all characters and returns the ones who are max-level
 * @param accounts WoW accounts belonging to the blizzard account
 * @returns {ReturnedCharacter[]} Relevant information about all the max-level character
 */
const getMaxLevelCharacters = (accounts) => {
    const characters = accounts
        .map((account) => account.characters)
        .flat()
        .filter((character) => character.level === 60);
    const characterlist = [];
    const maxLevel = characters.reduce((a, b) => {
        const playerClass = constants_1.CLASS_ID_TO_NAME[b.playable_class.id];
        const character = {
            name: b.name,
            realm: b.realm.slug,
            faction: b.faction.type,
            class: constants_1.CLASS_ID_TO_NAME[b.playable_class.id],
            color: constants_1.CLASS_NAME_TO_COLOR[playerClass],
        };
        a.push(character);
        return a;
    }, characterlist);
    return maxLevel;
};
exports.getMaxLevelCharacters = getMaxLevelCharacters;
