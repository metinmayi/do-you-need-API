/**
 * Give ID, get bossname
 */
const IdToBoss = {
  2458: "vigilant",
  2465: "Skolex, the Insatiable Ravener",
  2470: "Artificer Xy'mox",
  2459: "Dausegne, the Fallen Oracle",
  2460: "Prototype Pantheon",
  2461: "Lihuvim, Principal Architect",
  2463: "Halondrus the Reclaimer",
  2469: "Anduin Wrynn",
  2457: "Lords of Dread",
  2467: "Rygelon",
  2464: "The Jailer",
} as const;

/**
 * Sepulcher boss Ids
 */
type IBossId =
  | 2458
  | 2465
  | 2470
  | 2459
  | 2460
  | 2461
  | 2463
  | 2469
  | 2457
  | 2467
  | 2464;

/**
 * Current raid ID
 */
export const RaidId = 1195 as const;

/**
 * Supported Raid Difficulty
 */
export const RaidDifficulty = "raid-mythic" as const;

export { IdToBoss, IBossId };
