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
export const CHECK_TOKEN_URL = "https://eu.battle.net/oauth/check_token"
/**
 * World of Warcraft Region
 */
export const WOW_REGION = 'eu';

/**
 * The URI that blizzard redirects to after authorizing
 */
export const REDIRECT_URI = 'http://localhost:8000/blizzard/getCharacters';

/**
 * The scope of our battle.net request
 */
export const WOW_SCOPE = 'wow.profile';