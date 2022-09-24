import axios from "axios";

/**
 * Get's the guild's roster from the Blizzard API.
 * @param URL Roster URL. Retrieved from Blizzard's guild API.
 * @param token User's accessToken
 * @returns The guild's roster.
 */
export async function getRoster(URL: string, token: string) {
  const response = await axios(`${URL}&access_token=${token}`);
  const roster = response.data.members;
  return roster;
}
