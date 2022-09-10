import axios from "axios";

/**
 * Checks if the request's user is the GM of the guild or not
 * @param guildAndCharacterData Character name, guild name, realm and acesstoken
 * @returns {boolean} Indicating whether the user is a GM or not
 */
export async function checkGMStatus(guildAndCharacterData: any) {
  const { character, guild, realm, token } = guildAndCharacterData;
  const guildInformation = await axios(
    `https://eu.api.blizzard.com/data/wow/guild/${realm}/${guild}?namespace=profile-eu&locale=en_EU&access_token=${token}`
  );

  const rosterURL = guildInformation.data.roster.href;

  const roster = await axios(`${rosterURL}&access_token=${token}`).then(
    (res) => res.data.members
  );

  const isGM: boolean = roster.some(
    (member: any) =>
      member.character.name.toLowerCase() === character && member.rank === 0
  );

  return isGM;
}
