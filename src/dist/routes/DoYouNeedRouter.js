"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Routes for domain.com/doyouneed/
 */
const express_1 = __importDefault(require("express"));
const DoYouNeedRouter = express_1.default.Router();
const addCharacterUpgrades_1 = require("../controllers/doYouNeedController/addCharacterUpgrades");
const addGuildToUser_1 = require("../controllers/doYouNeedController/addGuildToUser");
const deleteCharacterUpgrade_1 = require("../controllers/doYouNeedController/deleteCharacterUpgrade");
const getCharacterUpgrades_1 = require("../controllers/doYouNeedController/getCharacterUpgrades");
const getGuildCharacters_1 = require("../controllers/doYouNeedController/getGuildCharacters");
const toggleCharacterUpgrade_1 = require("../controllers/doYouNeedController/toggleCharacterUpgrade");
DoYouNeedRouter.get("/", (req, res) => {
    res.send("Reached DoYouNeedRouter");
});
/**
 * Route for adding playerUpgrades to the database.
 */
DoYouNeedRouter.post("/addCharacterUpgrades", addCharacterUpgrades_1.addCharacterUpgrades);
/**
 * Route for getting playerUpgrades from the database
 */
DoYouNeedRouter.post("/getCharacterUpgrades", getCharacterUpgrades_1.getCharacterUpgrades);
/**
 * Route for removing a character upgrade
 */
DoYouNeedRouter.post("/deleteCharacterUpgrade", deleteCharacterUpgrade_1.deleteCharacterUpgrade);
/**
 * Route for removing a character upgrade
 */
DoYouNeedRouter.post("/toggleCharacterSelected", toggleCharacterUpgrade_1.toggleCharacterSelected);
/**
 * Route for adding a guild to a user's guilds.
 */
DoYouNeedRouter.post("/addGuildToUser", addGuildToUser_1.addGuildToUser);
/**
 * Gets player information from a boss table
 */
DoYouNeedRouter.post("/getGuildCharacters", getGuildCharacters_1.getGuildCharacterUpgrades);
exports.default = DoYouNeedRouter;
