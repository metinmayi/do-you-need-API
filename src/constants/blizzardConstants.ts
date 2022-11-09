import dotenv from "dotenv";
dotenv.config();

/**
 * Base URL for the domain
 */
export const BASE_URL =
  process.env.ENVIRONMENT === "dev"
    ? "http://localhost:8000"
    : "https://dynexperiment.herokuapp.com";

/**
 * API Endpoint for Authorization - Oauth 2.0
 */
export const AUTHORIZE_URL = "https://eu.battle.net/oauth/authorize";

/**
 * API Endpoint for retrieving token
 */
export const GET_TOKEN_URL = "https://eu.battle.net/oauth/token";

/**
 * API Endpoint for checking token validation
 */
export const CHECK_TOKEN_URL = "https://eu.battle.net/oauth/check_token";

/**
 * The URI that blizzard redirects to after authorizing
 */
export const REDIRECT_URI = `${BASE_URL}/blizzard/authenticateCallback`;

/**
 * The URL to send back a user to after finishing blizzard authentication
 */
export const SYNC_URL =
  process.env.ENVIRONMENT === "dev"
    ? "http://localhost:3000/synchronize"
    : `https://doyouneed.netlify.app/synchronize`;

/**
 * World of Warcraft Region
 */
export const WOW_REGION = "eu";

/**
 * The scope of our battle.net request
 */
export const WOW_SCOPE = "wow.profile";

export const CLASS_ID_TO_NAME = {
  1: "warrior",
  2: "paladin",
  3: "hunter",
  4: "rogue",
  5: "priest",
  6: "death knight",
  7: "shaman",
  8: "mage",
  9: "warlock",
  10: "monk",
  11: "druid",
  12: "demon hunter",
} as const;

export enum CLASS_NAME_TO_COLOR {
  warrior = "#C79C6E",
  mage = "#69CCF0",
  paladin = "#F58CBA",
  hunter = "#ABD473",
  rogue = "#FFF569",
  priest = "#FFFFFF",
  shaman = "#0070DE",
  warlock = "#9482C9",
  monk = "#00FF96",
  druid = "#FF7D0A",
  "demon hunter" = "#A330C9",
  "death knight" = "#C41F3B",
}
