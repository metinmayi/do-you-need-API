import axios from "axios";
import { BlizzardRetrievedGuild } from "../../models/BlizzardModels/BlizzardRetrievedGuild";

/**
 * Fetches information about the guild from Blizzard's API
 * @param realm Guild's realm
 * @param guildName Guild's name
 * @param token User's accessToken
 * @returns Information about the guild, received from Blizzard
 */
export async function getGuildInformation(
  realm: string,
  guildName: string,
  token: string
) {
  const formattedGuildName = guildName.replaceAll(" ", "-");
  const response = await axios(
    `https://eu.api.blizzard.com/data/wow/guild/${realm}/${formattedGuildName.toLowerCase()}?namespace=profile-eu&locale=en_EU&access_token=${token}`
  );

  const guildInformation: BlizzardRetrievedGuild = response.data;

  return guildInformation;
}
