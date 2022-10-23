import { ICharacter } from "../../models/doYouNeed/ICharacter";
import { ICharacterUpgrades } from "../../models/doYouNeed/ICharacterUpgrades";
import { RaidbotsDroptimizer } from "../../models/raidbots/RaidbotsDroptimizer";

/**
 * Returns a character object constructed from the droptimizer.
 * @param {RaidbotsDroptimizer} droptimizer Droptimizer object retrieved from Raidbots.
 * @returns {ICharacter}
 */
export function constructCharacter(droptimizer: RaidbotsDroptimizer) {
  const character: ICharacter = {
    name: droptimizer.simbot.meta.player.toLowerCase(),
    selected: 1,
    role: droptimizer.simbot.meta.role,
    charClass: droptimizer.simbot.meta.charClass,
    blizzardId:
      droptimizer.simbot.meta.player.toLowerCase() +
      "-" +
      droptimizer.simbot.meta.rawFormData.armory.realm,
  };

  return character;
}
