import { CLASS_ID_TO_NAME } from "../../constants";
import { WowAccount } from "../../models/BlizzardModels/BlizzardRetrievedUser";
import { ReturnedCharacter } from "../../models/BlizzardModels/BlizzardReturnedUser";

export const getMaxLevelCharacters = (accounts: WowAccount[]) => {
  const characters = accounts
    .map((account) => account.characters)
    .flat()
    .filter((character) => character.level === 60);

  const characterlist: ReturnedCharacter[] = [];
  const maxLevel = characters.reduce((a, b) => {
    const character = {
      name: b.name,
      realm: b.realm.slug,
      faction: b.faction.type,
      class: CLASS_ID_TO_NAME[b.playable_class.id],
    };
    a.push(character);
    return a;
  }, characterlist);

  return maxLevel;
};
