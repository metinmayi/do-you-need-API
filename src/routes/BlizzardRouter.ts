/**
 * Routes for www.domain.com/blizzard
 */

import express from "express";
import { authenticate } from "../controllers/BlizzardControllers/authenticate";
import { checkAccessToken } from "../controllers/BlizzardControllers/checkAccessToken";
import { getCharacters } from "../controllers/BlizzardControllers/getCharacters";

const BlizzardRouter = express.Router();


/**
 * Sends the user to blizzards authentication page.
 * After authentication, they get redirected
 */
BlizzardRouter.get("/authenticate", authenticate);

/**
 * Gets redirected here after authenticating with blizzard.
 * Use this to get accessToken
 */
BlizzardRouter.get("/getCharacters", getCharacters);

/**
 * Checks the validity of the provided accesstoken
 */
BlizzardRouter.get('/checkAccessToken', checkAccessToken);

export default BlizzardRouter;
