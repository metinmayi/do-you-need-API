"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIBossName = exports.IdToBoss = exports.RaidDifficulty = exports.RaidId = void 0;
/**
 * Current raid ID
 */
exports.RaidId = 1200;
/**
 * Supported Raid Difficulty
 */
exports.RaidDifficulty = "raid-mythic";
/**
 * Give ID, get bossname
 */
exports.IdToBoss = {
    2480: "eranog",
    2482: "sennarth",
    2486: "the_primal_council",
    2491: "kurog_grimtotem",
    2493: "broodkeeper_diurna",
    2499: "raszageth",
    2502: "dathea",
};
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
];
/**
 * Type predicate to check if the string is a IBossName
 * @param {string} name Any string to test
 */
function isIBossName(name) {
    const arr = [...BOSS_NAMES];
    return arr.includes(name);
}
exports.isIBossName = isIBossName;
