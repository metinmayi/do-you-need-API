"use strict";
/**
 * Routes for www.domain.com/blizzard
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkAccessToken_1 = require("../controllers/blizzardController/checkAccessToken");
const getAndStoreAccessToken_1 = require("../controllers/blizzardController/getAndStoreAccessToken");
const getAuthorizeCode_1 = require("../controllers/blizzardController/getAuthorizeCode");
const getCharacters_1 = require("../controllers/blizzardController/getCharacters");
const registerGuild_1 = require("../controllers/blizzardController/registerGuild");
const getCharactersGuild_1 = require("../controllers/blizzardController/getCharactersGuild");
const getPlayersRank_1 = require("../controllers/blizzardController/getPlayersRank");
const BlizzardRouter = express_1.default.Router();
/**
 * Sends the user to blizzards authentication page where an auth code is generated.
 * The request gets redirected with the authCode to the "authenticateCallback" endpoint.
 */
BlizzardRouter.get("/authenticate", getAuthorizeCode_1.getAuthorizeCode);
/**
 * Redirect of the authenticate endpoint.
 */
BlizzardRouter.get("/authenticateCallback", getAndStoreAccessToken_1.getAndStoreAccessToken);
/**
 * Gets redirected here after authenticating with blizzard.
 * Use this to get accessToken
 */
BlizzardRouter.get("/getCharacters", getCharacters_1.getCharacters);
/**
 * Checks the validity of the provided accesstoken
 */
BlizzardRouter.get("/checkAccessToken", checkAccessToken_1.checkAccessToken);
/**
 * Checks the status of the players guild
 */
BlizzardRouter.get("/getCharactersGuild", getCharactersGuild_1.getCharactersGuild);
/**
 * Attempts to active a players guild. Checks if the player is the GM of the attempted guild
 */
BlizzardRouter.post("/registerGuild", registerGuild_1.registerGuild);
/**
 * Gets a players rank from the Blizzard API. Also sets the rank into the DYN database
 */
BlizzardRouter.post("/getPlayersRank", getPlayersRank_1.getPlayersRank);
exports.default = BlizzardRouter;
