/**
 * Give ID, get bossname
 */
const IdToBoss = {
  2458: "vigilant_guardian",
  2465: "skolex_the_insatiable_ravener",
  2470: "artificer_xymox",
  2459: "dausegne_the_fallen_oracle",
  2460: "prototype_pantheon",
  2461: "lihuvim_principal_architect",
  2463: "halondrus_the_reclaimer",
  2469: "anduin_wrynn",
  2457: "lords_of_dread",
  2467: "rygelon",
  2464: "the_jailer",
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
