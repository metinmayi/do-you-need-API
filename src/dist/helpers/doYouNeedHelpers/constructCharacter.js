"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructCharacter = void 0;
const specRoles_1 = require("../../constants/specRoles");
/**
 * Returns a character object constructed from the droptimizer.
 * @param {RaidbotsDroptimizer} droptimizer Droptimizer object retrieved from Raidbots.
 * @returns {ICharacter}
 */
function constructCharacter(droptimizer) {
    const character = {
        name: droptimizer.simbot.meta.player.toLowerCase(),
        // Temporary solution
        role: specRoles_1.specRoles[droptimizer.simbot.meta.spec] || "DPS",
        charClass: droptimizer.simbot.meta.charClass,
        blizzardId: droptimizer.simbot.meta.player.toLowerCase() +
            "-" +
            droptimizer.simbot.meta.rawFormData.armory.realm,
    };
    return character;
}
exports.constructCharacter = constructCharacter;
