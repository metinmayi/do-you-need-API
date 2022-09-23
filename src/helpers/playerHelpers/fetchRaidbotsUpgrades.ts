import axios from "axios";

/**
 * Takes a raidbots URL and returns the upgrades in a JSON format.
 * @param raidbotsURL The URL to the raidbots simulation.
 * @returns
 */
export const fetchRaidbotsUpgrades = async (raidbotsURL: string) => {
  try {
    const fetchURL = `https://www.raidbots.com/reports/${raidbotsURL}/data.json`;
    const response = await axios(fetchURL);
    return response.data;
  } catch (e) {
    throw new Error("Couldn't fetch data from raidbots");
  }
};
