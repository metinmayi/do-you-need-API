import { IdToBoss, isIBossName } from "../../constants";
import {
  ICharacter,
  ICharacterBossUpgrade,
} from "../../models/ICharacterUpgrade";
import {
  RaidbotsDroptimizer,
  Result,
} from "../../models/raidbots/RaidbotsDroptimizer";

/**
 * Takes an array of upgrades and inserts them into the character, in the corresponding bosses.
 * @param {ICharacter} character Character object
 * @param {Result[]} positiveUpgrades Array of upgrades that are an increase in value.
 * @param {RaidbotsDroptimizer} droptimizer Droptimizer object retrieved from Raidbots
 */
export function insertUpgrades(
  character: ICharacter,
  positiveUpgrades: Result[],
  droptimizer: RaidbotsDroptimizer
) {
  const currentDPS = droptimizer.sim.statistics.raid_dps.mean;

  for (const upgrade of positiveUpgrades) {
    const [instaceID, bossID, difficulty, itemID, unknown, slot] =
      upgrade.name.split("/");

    const bossName = IdToBoss[+bossID];

    const newDPS = upgrade.mean - currentDPS;
    const decimalIncrease = newDPS / currentDPS;
    const percentIncrease = (decimalIncrease * 100).toFixed(2);

    const ICharacterBossUpgrade: ICharacterBossUpgrade = {
      slot,
      value: percentIncrease,
    };

    if (isIBossName(bossName)) {
      character.characterUpgrades[bossName].push(ICharacterBossUpgrade);
    } else {
      throw new TypeError(`${bossName} is not a valid bossname`);
    }
  }
}
