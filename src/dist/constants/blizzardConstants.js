"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLASS_NAME_TO_COLOR = exports.CLASS_ID_TO_NAME = exports.WOW_SCOPE = exports.WOW_REGION = exports.SYNC_URL = exports.REDIRECT_URI = exports.CHECK_TOKEN_URL = exports.GET_TOKEN_URL = exports.AUTHORIZE_URL = exports.BASE_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/**
 * Base URL for the domain
 */
exports.BASE_URL = process.env.ENVIRONMENT === "dev"
    ? "http://localhost:8000"
    : "https://dynexperiment.herokuapp.com";
console.log(exports.BASE_URL);
/**
 * API Endpoint for Authorization - Oauth 2.0
 */
exports.AUTHORIZE_URL = "https://eu.battle.net/oauth/authorize";
/**
 * API Endpoint for retrieving token
 */
exports.GET_TOKEN_URL = "https://eu.battle.net/oauth/token";
/**
 * API Endpoint for checking token validation
 */
exports.CHECK_TOKEN_URL = "https://eu.battle.net/oauth/check_token";
/**
 * The URI that blizzard redirects to after authorizing
 */
exports.REDIRECT_URI = `${exports.BASE_URL}/blizzard/authenticateCallback`;
/**
 * The URL to send back a user to after finishing blizzard authentication
 */
exports.SYNC_URL = process.env.ENVIRONMENT === "dev"
    ? "http://localhost:8000/synchronize"
    : `https://doyouneed.netlify.app/synchronize`;
/**
 * World of Warcraft Region
 */
exports.WOW_REGION = "eu";
/**
 * The scope of our battle.net request
 */
exports.WOW_SCOPE = "wow.profile";
exports.CLASS_ID_TO_NAME = {
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
var CLASS_NAME_TO_COLOR;
(function (CLASS_NAME_TO_COLOR) {
    CLASS_NAME_TO_COLOR["warrior"] = "#C79C6E";
    CLASS_NAME_TO_COLOR["mage"] = "#69CCF0";
    CLASS_NAME_TO_COLOR["paladin"] = "#F58CBA";
    CLASS_NAME_TO_COLOR["hunter"] = "#ABD473";
    CLASS_NAME_TO_COLOR["rogue"] = "#FFF569";
    CLASS_NAME_TO_COLOR["priest"] = "#FFFFFF";
    CLASS_NAME_TO_COLOR["shaman"] = "#0070DE";
    CLASS_NAME_TO_COLOR["warlock"] = "#9482C9";
    CLASS_NAME_TO_COLOR["monk"] = "#00FF96";
    CLASS_NAME_TO_COLOR["druid"] = "#FF7D0A";
    CLASS_NAME_TO_COLOR["demon hunter"] = "#A330C9";
    CLASS_NAME_TO_COLOR["death knight"] = "#C41F3B";
})(CLASS_NAME_TO_COLOR = exports.CLASS_NAME_TO_COLOR || (exports.CLASS_NAME_TO_COLOR = {}));
