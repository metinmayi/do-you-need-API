import axios from "axios";

export async function getGuildInformation(realm: any, guild: any, token: any) {
  const guildInformation = await axios(
    `https://eu.api.blizzard.com/data/wow/guild/${realm}/${guild}?namespace=profile-eu&locale=en_EU&access_token=${token}`
  );

  return guildInformation;
}
