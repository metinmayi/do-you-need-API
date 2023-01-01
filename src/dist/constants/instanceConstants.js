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
};
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
