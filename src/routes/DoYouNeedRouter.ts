/**
 * Routes for domain.com/doyouneed/
 */
import express from "express";
const DoYouNeedRouter = express.Router();
import { Request, Response } from "express";
import { addCharacterUpgrades } from "../controllers/doYouNeedController/addCharacterUpgrades";
import { addGuildToUser } from "../controllers/doYouNeedController/addGuildToUser";
import { deleteCharacterUpgrade } from "../controllers/doYouNeedController/deleteCharacterUpgrade";
import { getCharacterUpgrades } from "../controllers/doYouNeedController/getCharacterUpgrades";
import { toggleCharacterSelected } from "../controllers/doYouNeedController/toggleCharacterUpgrade";

DoYouNeedRouter.get("/", (req: Request, res: Response) => {
  res.send("Reached DoYouNeedRouter");
});

/**
 * Route for adding playerUpgrades to the database.
 */
DoYouNeedRouter.post("/addCharacterUpgrades", addCharacterUpgrades);

/**
 * Route for getting playerUpgrades from the database
 */
DoYouNeedRouter.post("/getCharacterUpgrades", getCharacterUpgrades);

/**
 * Route for removing a character upgrade
 */
DoYouNeedRouter.post("/deleteCharacterUpgrade", deleteCharacterUpgrade);

/**
 * Route for removing a character upgrade
 */
DoYouNeedRouter.post("/toggleCharacterSelected", toggleCharacterSelected);

/**
 * Route for adding a guild to a user's guilds.
 */
DoYouNeedRouter.post("/addGuildToUser", addGuildToUser);

export default DoYouNeedRouter;
