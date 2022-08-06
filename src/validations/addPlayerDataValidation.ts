import { ReportURL } from "../constants";

/**
 * Takes in a URL and makes sure it is actually from raidbots
 */
export const addPlayerDataValidation = (url: string) => {
  try {
    const URLobject = new URL(url);
    const receivedUrl = URLobject.origin + "/simbot/report/";
    if (receivedUrl !== ReportURL) {
      throw new Error("Invalid URL");
    }
    return true;
  } catch (error) {
    return false;
  }
};
