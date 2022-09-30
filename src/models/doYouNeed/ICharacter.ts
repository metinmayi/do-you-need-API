import { ICharacterUpgrades } from "./ICharacterUpgrades";

export interface ICharacter {
  playerName: string;
  selected: boolean;
  role: string;
  className: string;
  characterUpgrades: ICharacterUpgrades;
  upgradeCount?: number;
}
