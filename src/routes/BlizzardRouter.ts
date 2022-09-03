/**
 * Routes for www.domain.com/blizzard
 */

import express from 'express';
import { checkAccessToken } from '../controllers/BlizzardControllers/checkAccessToken';
import { getAndStoreAccessToken } from '../controllers/BlizzardControllers/getAndStoreAccessToken';
import { getAuthorizeCode } from '../controllers/BlizzardControllers/getAuthorizeCode';
import { getCharacters } from '../controllers/BlizzardControllers/getCharacters';

const BlizzardRouter = express.Router();

/**
 * Sends the user to blizzards authentication page where an auth code is generated.
 * The request gets redirected with the authCode to the "authenticateCallback" endpoint.
 */
BlizzardRouter.get('/authenticate', getAuthorizeCode);

/**
 * Redirect of the authenticate endpoint.
 */
BlizzardRouter.get('/authenticateCallback', getAndStoreAccessToken);

/**
 * Gets redirected here after authenticating with blizzard.
 * Use this to get accessToken
 */
BlizzardRouter.get('/getCharacters', getCharacters);

/**
 * Checks the validity of the provided accesstoken
 */
BlizzardRouter.get('/checkAccessToken', checkAccessToken);

export default BlizzardRouter;
