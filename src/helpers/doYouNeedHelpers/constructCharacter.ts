import { ICharacter, ICharacterUpgrades } from "../../models/ICharacterUpgrade";
import { RaidbotsDroptimizer } from "../../models/raidbots/RaidbotsDroptimizer";

/**
 * Returns a character object constructed from the droptimizer.
 * @param {RaidbotsDroptimizer} droptimizer Droptimizer object retrieved from Raidbots.
 * @returns {ICharacter}
 */
export function constructCharacter(droptimizer: RaidbotsDroptimizer) {
  const character: ICharacter = {
    playerName: droptimizer.simbot.meta.player,
    selected: false,
    role: droptimizer.simbot.meta.role,
    className: droptimizer.simbot.meta.charClass,
    characterUpgrades: new ICharacterUpgrades(),
  };

  return character;
}
