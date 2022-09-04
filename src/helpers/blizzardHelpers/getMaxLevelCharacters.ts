export const getMaxLevelCharacters = (accounts: Array<any>) => {
  const characters = accounts
    .map((account) => account.characters)
    .flat()
    .filter((character) => character.level === 60);

  const maxLevel = characters.reduce((a, b) => {
    const character = {
      name: b.name,
      realm: b.realm.slug,
      faction: b.faction.type,
    };
    a.push(character);
    return a;
  }, []);

  return maxLevel;
};
