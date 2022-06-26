import axios from "axios";
import { IBossId, IdToBoss, RaidDifficulty, RaidId } from "../constants";
import { IPlayer, IItemType } from "../models/Player";

/**
 * Takes a reportID and starts the process of importing data, breaking it up and sending back a player object.
 */
const addPlayerData = async (reportId: string) => {
  // Does the fetch.
  const playerData = await fetchPlayerData(reportId);

  // Checks if the log is for the correct raid;
  validateInstanceAndDifficulty(playerData);

  // Gets a player with default values.
  const player = getDefaultPlayer(playerData);
  const playerDps = playerData.sim.players[0].collected_data.dps.mean;

  // BRYT NER DET HÄR TILL FLERA FUNKTIONER !!!!!!!!!!!!!!!!!!!!!!
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const bossUpgrades = new Map();
  for (const result of playerData.sim.profilesets.results) {
    // If the upgrade is negative in DPS increase, skip it.
    const rawDps = result.mean - playerDps;
    if (rawDps < 0) continue;

    const itemSlot: IItemType = result.name.split("/")[5];
    const bossId: IBossId = result.name.split("/")[1];
    const bossName = IdToBoss[bossId];
    if (!bossName) continue;

    const dpsPercentage = Math.round((rawDps / playerDps) * 1000) / 10;
    const dpsNumber = Math.round(rawDps);
    // const percentageDps = Math.round(percentageDecimal * 10) / 10;
    const upgrade = {
      [itemSlot]: { dpsPercentage, dpsNumber },
    };

    if (!bossUpgrades.get(bossName)) {
      bossUpgrades.set(bossName, [upgrade]);
      continue;
    }
    const currentBossUpgrades = bossUpgrades.get(bossName);

    checkIfUpgrade(currentBossUpgrades, upgrade, itemSlot);
  }
  const bajs = 1233;
  return player;
};

/**
 *
 */

const checkIfUpgrade = (
  currentBossUpgrades: any,
  upgrade: any,
  itemSlot: string
) => {
  for (const existingUpgrades of currentBossUpgrades) {
    if (itemSlot !== Object.keys(existingUpgrades)[0]) {
      currentBossUpgrades.push(upgrade);
      return;
    } else {
      if (upgrade[itemSlot].dpsNumber > existingUpgrades[itemSlot].dpsNumber) {
        console.log("New is better, should replace");
        existingUpgrades[itemSlot] = upgrade;
      } else {
        console.log("Old is better, Dont replace");
      }
    }
  }
};
/**
 * Fetches playerdata from the JSON url
 */
const fetchPlayerData = async (reportId: string) => {
  try {
    const fetchURL = `https://www.raidbots.com/reports/${reportId}/data.json`;
    const response = await axios(fetchURL);
    return response.data;
  } catch (e) {
    throw new Error("Couldn't fetch data from raidbots");
  }
};

/**
 * Ensures it's mythic difficulty and the instance ID is correct
 */
const validateInstanceAndDifficulty = (playerData: any) => {
  const raidId = playerData.sim.profilesets.results[0].name.split("/")[0];
  const raidDifficulty =
    playerData.sim.profilesets.results[0].name.split("/")[2];
  if (parseInt(raidId) !== RaidId || raidDifficulty !== RaidDifficulty) {
    throw new Error("Wrong raid and/or difficulty linked");
  }
};

/**
 * Returns a player with default information. Not including playerUpgrades
 */
const getDefaultPlayer = (playerData: any) => {
  const name = playerData.simbot.meta.player;
  const role = playerData.simbot.meta.role;
  const className = playerData.simbot.meta.charClass;
  const player = new IPlayer(name, false, role, className, []);
  player.upgradeCount = 0;
  return player;
};

export { addPlayerData };
