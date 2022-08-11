import axios from "axios";
import {
  IBossId,
  IBossName,
  IdToBoss,
  RaidDifficulty,
  RaidId,
} from "../constants";
import { pool } from "../config/database/database";
import { IBossUpgrade } from "../models/IBossUpgrade";
// import { connection } from "../database";
import { IPlayer, IItemType } from "../models/Player";
import { IPlayerData, Meta } from "../models/PlayerData";

/**
 * Takes a reportID and starts the process of importing data, breaking it up and sending back a player object.
 */
const addPlayerData = async (reportId: string) => {
  // Does the fetch.
  const playerData: IPlayerData = await fetchPlayerData(reportId);

  // Necessary declarations
  const metaInfo = playerData.simbot.meta;
  const simResults = playerData.sim.profilesets.results;
  const playerDps = playerData.sim.players[0].collected_data.dps.mean;

  // Checks if the log is for the correct raid;
  validateInstanceAndDifficulty(metaInfo);

  // Gets a player object with default values.
  const player = getDefaultPlayer(metaInfo);

  // Maps out all the bosses with their upgrades.
  const bossesWithUpgrades = new Map<IBossName, IBossUpgrade[]>();
  mapUpgradesToBoss(simResults, bossesWithUpgrades, playerDps);
  await queryUpgrades(bossesWithUpgrades, player);

  return true;
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
const validateInstanceAndDifficulty = (metaInfo: Meta) => {
  const raidId = metaInfo.instanceLibrary[0].id;
  const raidDifficulty = metaInfo.itemLibrary[0].difficulty;
  if (raidId !== RaidId || raidDifficulty !== RaidDifficulty) {
    throw new Error("Wrong raid and/or difficulty linked");
  }
};

/**
 * Returns a player object with default information: Name, Role, className and upgradeCount = 0.
 */
const getDefaultPlayer = (metaInfo: Meta) => {
  const name = metaInfo.player;
  const role = metaInfo.role;
  const className = metaInfo.charClass;
  const player = new IPlayer(
    name,
    false,
    role,
    className,
    [],
    "Project_Questionmark-Kazzak"
  );
  return player;
};

/**
 * Iterates sim results and maps them to the corresponding boss.
 */
const mapUpgradesToBoss = (
  simResults: any,
  bossesWithUpgrades: any,
  playerDps: number
) => {
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
    let indexOfExistingItem: number = -1;
    const itemSlotExist = currentBossUpgrades.some(
      (bossUpgrades: any, index: number) => {
        if (bossUpgrades[itemSlot]) {
          indexOfExistingItem = index;
          return true;
        }
      }
    );
    if (!itemSlotExist) {
      currentBossUpgrades.push(potentialUpgrade);
      continue;
    }

    // At this point we know there's an item in the array with the same item type. Compare the upgrades and keep the best upgrade.
    if (
      potentialUpgrade[itemSlot].dpsUpgrade >
      currentBossUpgrades[indexOfExistingItem][itemSlot].dpsUpgrade
    ) {
      currentBossUpgrades[indexOfExistingItem] = potentialUpgrade;
    }
  }
};

const queryUpgrades = async (
  bossesWithUpgrades: Map<IBossName, IBossUpgrade[]>,
  player: IPlayer
) => {
  for (const upgrade of bossesWithUpgrades) {
    const nameOfBoss = upgrade[0];
    const upgradeItems: any[] = [];
    const upgradeValues: any[] = [];
    upgrade[1].forEach((upgrade) => {
      upgradeItems.push(Object.keys(upgrade));
      const values = Object.values(upgrade);
      upgradeValues.push(
        `${values[0].dpsPercentage}% (${values[0].dpsUpgrade})`
      );
    });

    const inputItems: any = upgradeItems.join(",");
    const inputValues = upgradeValues.join(",");
    let onDuplicate = "";

    for (let i = 0; i < upgradeItems.length; i++) {
      onDuplicate += `${upgradeItems[i]}=${upgradeValues[i]},`;
    }

    onDuplicate = onDuplicate.slice(0, -1);

    const query = `INSERT INTO ${nameOfBoss}(player_name, role, class_name, guild_name, upgrade_count, ${inputItems})
    VALUE('${player.playerName.toLowerCase()}','${player.role}','${
      player.className
    }','${player.guildName}', ${
      upgradeItems.length
    }, ${inputValues}) ON DUPLICATE KEY UPDATE ${onDuplicate}`;
    await pool.execute(query);
  }
};
export { addPlayerData };
