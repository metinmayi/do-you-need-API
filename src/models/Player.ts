export class IPlayer {
  constructor(
    public playerName: string,
    public selected: boolean,
    public role: "tank" | "healing" | "dps",
    public className:
      | "warrior"
      | "mage"
      | "paladin"
      | "hunter"
      | "rogue"
      | "priest"
      | "shaman"
      | "warlock"
      | "monk"
      | "druid"
      | "demonHunter"
      | "deathKnight",
    public playerUpgrades: [],
    public guildName: string
  ) {}
  upgradeCount?: number;
}

// export interface IUPgradeItem {
//   itemSlot: string;
//   dpsPercentage: number;
//   dpsNumber: number;
// }

export type IItemType =
  | "head"
  | "neck"
  | "shoulder"
  | "back"
  | "chest"
  | "wrist"
  | "hands"
  | "waist"
  | "legs"
  | "feet"
  | "ring"
  | "trinket"
  | "mainHand"
  | "offHand"
  | "oneHand";
