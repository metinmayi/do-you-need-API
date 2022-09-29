import { ICharacterUpgrade } from "../../models/ICharacterUpgrade";
import { RaidbotsDroptimizer } from "../../models/raidbots/RaidbotsDroptimizer";

export function constructCharacterUpgrade(droptimizer: RaidbotsDroptimizer) {
  const characterUpgrade: ICharacterUpgrade = {
    playerName: droptimizer.simbot.meta.player,
    selected: false,
    role: droptimizer.simbot.meta.role,
    className: droptimizer.simbot.meta.charClass,
    playerUpgrades: [],
  };

  return characterUpgrade;
}
