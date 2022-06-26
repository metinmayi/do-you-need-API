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
  
  // Maps out all the bosses with their upgrades.
  const playerDps = playerData.sim.players[0].collected_data.dps.mean;
  const bossesWithUpgrades = new Map();
  const simResults = playerData.sim.profilesets.results;
mapUpgradesToBoss(simResults, bossesWithUpgrades, playerDps);

  return bossesWithUpgrades;
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
 * Returns a player object with default information: Name, Role, className and upgradeCount = 0.
 */
const getDefaultPlayer = (playerData: any) => {
  const name = playerData.simbot.meta.player;
  const role = playerData.simbot.meta.role;
  const className = playerData.simbot.meta.charClass;
  const player = new IPlayer(name, false, role, className, []);
  player.upgradeCount = 0;
  return player;
};

const mapUpgradesToBoss = (simResults: any, bossesWithUpgrades: any, playerDps: number) => {
  for (const result of simResults) {
    // If the upgrade is negative in DPS increase, skip it.
    let dpsUpgrade = result.mean - playerDps;
    if (dpsUpgrade < 0) continue;

    // If the bossname is undefined (Not included in constant of current bosses) skip.
    const itemSlot: IItemType = result.name.split("/")[5];
    const bossId: IBossId = result.name.split("/")[1];
    const bossName = IdToBoss[bossId];
    if (!bossName) continue;

    // Rounds the upgrade values and sets the potential upgrade object.
    const dpsPercentage = Math.round((dpsUpgrade / playerDps) * 1000) / 10;
    dpsUpgrade = Math.round(dpsUpgrade);
    const potentialUpgrade = {
      [itemSlot]: { dpsPercentage, dpsUpgrade },
    };

    // If a boss with bossName has no registered upgrades, put in this upgrade as it's guaranteed to be an actual upgrade.
    if (!bossesWithUpgrades.get(bossName)) {
      bossesWithUpgrades.set(bossName, [potentialUpgrade]);
      continue;
    }

    // At this point we know the boss we're looking at has an array of upgrades with atleast one element.
    const currentBossUpgrades = bossesWithUpgrades.get(bossName);

    // Check if the item slot we're evaluating exists in that array. If not, it's guaranteed to be an upgrade.
    const itemSlotExist = currentBossUpgrades.some((bossUpgrades: any) => bossUpgrades[itemSlot]);
    if (!itemSlotExist) {
      currentBossUpgrades.push(potentialUpgrade);
      continue;
    }

    // At this point we know there's an item in the array with the same item type. Compare the upgrades and keep the best upgrade.
    checkIfUpgrade(currentBossUpgrades, potentialUpgrade, itemSlot);
  }

}

export { addPlayerData };
