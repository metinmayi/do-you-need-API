/**
 * Routes for www.domain.com/blizzard
 */

import express from "express";
import { checkAccessToken } from "../controllers/blizzardController/checkAccessToken";
import { getAndStoreAccessToken } from "../controllers/blizzardController/getAndStoreAccessToken";
import { getAuthorizeCode } from "../controllers/blizzardController/getAuthorizeCode";
import { getCharacters } from "../controllers/blizzardController/getCharacters";
import { getGuild } from "../controllers/blizzardController/getGuild";

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
BlizzardRouter.get("/getGuildStatus", getGuild);

export default BlizzardRouter;
