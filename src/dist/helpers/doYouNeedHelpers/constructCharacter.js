"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructCharacter = void 0;
/**
 * Returns a character object constructed from the droptimizer.
 * @param {RaidbotsDroptimizer} droptimizer Droptimizer object retrieved from Raidbots.
 * @returns {ICharacter}
 */
function constructCharacter(droptimizer) {
    const character = {
        name: droptimizer.simbot.meta.player.toLowerCase(),
        selected: 1,
        role: droptimizer.simbot.meta.role,
        charClass: droptimizer.simbot.meta.charClass,
        blizzardId: droptimizer.simbot.meta.player.toLowerCase() +
            "-" +
            droptimizer.simbot.meta.rawFormData.armory.realm,
    };
    return character;
}
exports.constructCharacter = constructCharacter;
