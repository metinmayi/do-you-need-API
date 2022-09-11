/**
 * Base URL for the domain
 */
export const BASE_URL = "http://localhost:8000";

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
export const SYNC_URL = `http://localhost:3000/synchronize`;
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
};
