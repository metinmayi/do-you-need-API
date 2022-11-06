import { pool } from "../../database/database";
import { IBossUpgrade } from "../../models/IBossUpgrade";

/**
 * Takes the character's ID and the upgrades for a specific boss.
 * Merges the ugprades with default upgrades and adds them to the table of boss_upgrades
 * @param characterID The character's ID. Consists of name-server
 * @param bestUpgradesPerSlot An array [bossName, arrayOfUpgrades]
 */
export async function dbAddBossUpgrades(
  characterID: string,
  bestUpgradesPerSlot: [any, any]
) {
  const [bossName, upgrades] = bestUpgradesPerSlot;
  const SQL =
    "INSERT INTO boss_upgrades() VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  const defaultUpgrades = new IBossUpgrade(bossName, characterID);
  const currentUpgrades = Object.fromEntries(upgrades);
  const mergedUpgrades = Object.assign(defaultUpgrades, currentUpgrades);
  const values = Object.values(mergedUpgrades).map((value) => {
    return typeof value !== "number" ? value : Math.round(value).toString();
  });
  await pool.execute(SQL, values);
}
