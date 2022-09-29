export interface ICharacterUpgrade {
  playerName: string;
  selected: boolean;
  role: "tank" | "healing" | "dps";
  className:
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
    | "deathKnight";
  playerUpgrades: any[];
  guildName: string;
  upgradeCount?: number;
}

// export interface IUPgradeItem {
//   itemSlot: string;
//   dpsPercentage: number;
//   dpsNumber: number;
// }

// export type IItemType =
//   | "head"
//   | "neck"
//   | "shoulder"
//   | "back"
//   | "chest"
//   | "wrist"
//   | "hands"
//   | "waist"
//   | "legs"
//   | "feet"
//   | "ring"
//   | "trinket"
//   | "mainHand"
//   | "offHand"
//   | "oneHand"
