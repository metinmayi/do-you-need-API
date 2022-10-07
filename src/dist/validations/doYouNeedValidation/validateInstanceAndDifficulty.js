"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInstanceAndDifficulty = void 0;
const constants_1 = require("../../constants");
/**
 * Checks if the droptimizer is for the correct instance and difficulty.
 * @param {RaidbotsDroptimizer} droptimizer Droptimizer response
 * @returns {boolean} boolean
 */
const validateInstanceAndDifficulty = (droptimizer) => {
    const difficulty = droptimizer.simbot.meta.rawFormData.droptimizer.difficulty;
    const ID = droptimizer.simbot.meta.rawFormData.droptimizer.instance;
    if (ID !== constants_1.RaidId || difficulty !== constants_1.RaidDifficulty) {
        return false;
    }
    return true;
};
exports.validateInstanceAndDifficulty = validateInstanceAndDifficulty;
