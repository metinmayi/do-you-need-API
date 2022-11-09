import { specRoles } from "../../constants/specRoles";
import { ICharacter } from "../../models/doYouNeed/ICharacter";
import { RaidbotsDroptimizer } from "../../models/raidbots/RaidbotsDroptimizer";

/**
 * Returns a character object constructed from the droptimizer.
 * @param {RaidbotsDroptimizer} droptimizer Droptimizer object retrieved from Raidbots.
 * @returns {ICharacter}
 */
export function constructCharacter(droptimizer: RaidbotsDroptimizer) {
  const character: ICharacter = {
    name: droptimizer.simbot.meta.player.toLowerCase(),
    role: specRoles[droptimizer.simbot.meta.spec] || "DPS",
    charClass: droptimizer.simbot.meta.charClass,
    blizzardId:
      droptimizer.simbot.meta.player.toLowerCase() +
      "-" +
      droptimizer.simbot.meta.rawFormData.armory.realm,
  };

  return character;
}
