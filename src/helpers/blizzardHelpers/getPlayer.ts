import axios from "axios";

export const getPlayer = async (
  username: string,
  realm: string,
  token: string
) => {
  const URL = `https://eu.api.blizzard.com/profile/wow/character/${realm}/${username.toLowerCase()}?namespace=profile-eu&locale=en_EU&access_token=${token}`;
  const response = await axios(URL);
  return response.data;
};
