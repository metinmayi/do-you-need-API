import axios from "axios";

/**
 * Checks if the request's user is the GM of the guild or not
 * @param roster Retrieved roster from Blizzard API
 * @param character Character name
 * @returns {boolean} Indicating whether the user is a GM or not
 */
export async function checkGMStatus(roster: any, character: string) {
  const isGM: boolean = roster.some(
    (member: any) =>
      member.character.name.toLowerCase() === character && member.rank === 0
  );

  return isGM;
}
