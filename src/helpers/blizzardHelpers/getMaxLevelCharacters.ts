import { CLASS_ID_TO_NAME, CLASS_NAME_TO_COLOR } from "../../constants";
import { WowAccount } from "../../models/BlizzardModels/BlizzardRetrievedUser";
import { ReturnedCharacter } from "../../models/BlizzardModels/BlizzardReturnedUser";

/**
 * Takes all characters and returns the ones who are max-level
 * @param accounts WoW accounts belonging to the blizzard account
 * @returns {ReturnedCharacter[]} Relevant information about all the max-level character
 */
export const getMaxLevelCharacters = (accounts: WowAccount[]) => {
  const characters = accounts
    .map((account) => account.characters)
    .flat()
    .filter((character) => character.level === 60);

  const characterlist: ReturnedCharacter[] = [];
  const maxLevel = characters.reduce((a, b) => {
    const playerClass = CLASS_ID_TO_NAME[b.playable_class.id];
    const character = {
      name: b.name,
      realm: b.realm.slug,
      faction: b.faction.type,
      class: CLASS_ID_TO_NAME[b.playable_class.id],
      color: CLASS_NAME_TO_COLOR[playerClass],
    };
    a.push(character);
    return a;
  }, characterlist);

  return maxLevel;
};
