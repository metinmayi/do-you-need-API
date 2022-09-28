import { RaidDifficulty, RaidId } from "../../constants";
import { RaidbotsDroptimizer } from "../../models/raidbots/RaidbotsDroptimizer";

/**
 * Checks if the droptimizer is for the correct instance and difficulty.
 * @param {RaidbotsDroptimizer} droptimizer Droptimizer response
 * @returns {boolean} boolean
 */
export const validateInstanceAndDifficulty = (
  droptimizer: RaidbotsDroptimizer
) => {
  const difficulty = droptimizer.simbot.meta.rawFormData.droptimizer.difficulty;
  const ID = droptimizer.simbot.meta.rawFormData.droptimizer.instance;
  if (ID !== RaidId || difficulty !== RaidDifficulty) {
    return false;
  }
  return true;
};
export {};
