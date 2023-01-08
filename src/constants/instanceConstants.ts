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
  2480: "eranog",
  2482: "sennarth",
  2486: "the_primal_council",
  2491: "kurog_grimtotem",
  2493: "broodkeeper_diurna",
  2499: "raszageth",
  2502: "dathea",
} as const;

/**
 * Array of bosses in the raid
 */
const BOSS_NAMES = [
  "kurog_grimtotem",
  "sennarth",
  "eranog",
  "broodkeeper_diurna",
  "raszageth",
  "the_primal_council",
  "dathea",
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
