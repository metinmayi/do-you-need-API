import axios from "axios";

export async function getGuildInformation(
  realm: string,
  guildName: string,
  token: string
) {
  const guildInformation = await axios(
    `https://eu.api.blizzard.com/data/wow/guild/${realm}/${guildName.toLowerCase()}?namespace=profile-eu&locale=en_EU&access_token=${token}`
  );

  return guildInformation;
}
