import axios from "axios";
import { BlizzardRetrievedCharacter } from "../../models/BlizzardModels/BlizzardRetrievedCharacter";

/**
 * Fetches information about the character from the Blizzard API
 * @param username Character's username
 * @param realm Character's realm
 * @param token User token
 * @returns
 */
export async function getCharacter(
  username: string,
  realm: string,
  token: string
) {
  const URL = `https://eu.api.blizzard.com/profile/wow/character/${realm}/${username.toLowerCase()}?namespace=profile-eu&locale=en_EU&access_token=${token}`;
  const response = await axios(URL);
  const data: BlizzardRetrievedCharacter = response.data;
  return data;
}
