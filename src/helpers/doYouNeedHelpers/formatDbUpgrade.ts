import { bossLoot } from "../../constants/bossLoot";

/**
 * Takes an array of upgrades and formats them in accordance to client requirements.
 * @param upgrades Array of upgrades from the DB.
 * @returns Array of upgrades formatted to client needs.
 */
export function formatDbUpgrade(upgrades: any[], bossName: string) {
  const formattedUpgrades = upgrades.map((upgrade: any) => {
    const upgradeObject = {
      id: upgrade.id,
      selected: upgrade.selected,
      bossName: upgrade.boss_name,
      name: upgrade.name,
      role: upgrade.role,
      class: upgrade.class,
      upgrades: [""],
    };

    const bossDrops = bossLoot[bossName];
    bossDrops.forEach((bossDrop) => {
      let incomingUpgrade = upgrade[bossDrop];
      if (!incomingUpgrade) {
        incomingUpgrade = "-";
      }
      upgradeObject.upgrades.push(incomingUpgrade);
    });

    return upgradeObject;
  });

  return formattedUpgrades;
}
