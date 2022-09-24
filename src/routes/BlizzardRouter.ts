/**
 * Routes for www.domain.com/blizzard
 */

import express from "express";
import { checkAccessToken } from "../controllers/blizzardController/checkAccessToken";
import { getAndStoreAccessToken } from "../controllers/blizzardController/getAndStoreAccessToken";
import { getAuthorizeCode } from "../controllers/blizzardController/getAuthorizeCode";
import { getCharacters } from "../controllers/blizzardController/getCharacters";
import { registerGuild } from "../controllers/blizzardController/registerGuild";
import { getCharactersGuild } from "../controllers/blizzardController/getCharactersGuild";
import { getPlayersRank } from "../controllers/blizzardController/getPlayersRank";

const BlizzardRouter = express.Router();

/**
 * Sends the user to blizzards authentication page where an auth code is generated.
 * The request gets redirected with the authCode to the "authenticateCallback" endpoint.
 */
BlizzardRouter.get("/authenticate", getAuthorizeCode);

/**
 * Redirect of the authenticate endpoint.
 */
BlizzardRouter.get("/authenticateCallback", getAndStoreAccessToken);

/**
 * Gets redirected here after authenticating with blizzard.
 * Use this to get accessToken
 */
BlizzardRouter.get("/getCharacters", getCharacters);

/**
 * Checks the validity of the provided accesstoken
 */
BlizzardRouter.get("/checkAccessToken", checkAccessToken);

/**
 * Checks the status of the players guild
 */
BlizzardRouter.get("/getCharactersGuild", getCharactersGuild);

/**
 * Attempts to active a players guild. Checks if the player is the GM of the attempted guild
 */
BlizzardRouter.post("/registerGuild", registerGuild);

/**
 * Gets a players rank from the Blizzard API. Also sets the rank into the DYN database
 */
BlizzardRouter.post("/getPlayersRank", getPlayersRank);

export default BlizzardRouter;
