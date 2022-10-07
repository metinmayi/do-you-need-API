"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructCharacter = void 0;
const ICharacterUpgrades_1 = require("../../models/doYouNeed/ICharacterUpgrades");
/**
 * Returns a character object constructed from the droptimizer.
 * @param {RaidbotsDroptimizer} droptimizer Droptimizer object retrieved from Raidbots.
 * @returns {ICharacter}
 */
function constructCharacter(droptimizer) {
    const character = {
        playerName: droptimizer.simbot.meta.player,
        selected: false,
        role: droptimizer.simbot.meta.role,
        className: droptimizer.simbot.meta.charClass,
        characterUpgrades: new ICharacterUpgrades_1.ICharacterUpgrades(),
    };
    return character;
}
exports.constructCharacter = constructCharacter;
