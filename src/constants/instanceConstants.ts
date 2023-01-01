/**
 * Current raid ID
 */
export const RaidId = 1200 as const;

/**
 * Supported Raid Difficulty
 */
export const RaidDifficulty = "raid-mythic" as const;

/**
 * Give ID, get bossname
 */
export const IdToBoss: Record<number, string> = {
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
 * Array of bosses in the raid
 */
const BOSS_NAMES = [
  "vigilant_guardian",
  "skolex_the_insatiable_ravener",
  "artificer_xymox",
  "dausegne_the_fallen_oracle",
  "prototype_pantheon",
  "lihuvim_principal_architect",
  "halondrus_the_reclaimer",
  "anduin_wrynn",
  "lords_of_dread",
  "rygelon",
  "the_jailer",
] as const;

/**
 * Boss names inherited by the array of bosses in the raid
 */
export type IBossName = typeof BOSS_NAMES[number];

/**
 * Type predicate to check if the string is a IBossName
 * @param {string} name Any string to test
 */
export function isIBossName(name: string): name is IBossName {
  const arr: any[] = [...BOSS_NAMES];
  return arr.includes(name);
}
