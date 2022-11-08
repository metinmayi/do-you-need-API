/**
 * Routes for domain.com/doyouneed/
 */
import express from "express";
const DoYouNeedRouter = express.Router();
import { Request, Response } from "express";
import { addCharacterUpgrades } from "../controllers/doYouNeedController/addCharacterUpgrades";
import { addGuildToUser } from "../controllers/doYouNeedController/addGuildToUser";
import { getCharacterUpgrades } from "../controllers/doYouNeedController/getCharacterUpgrades";
import { getGuildCharacterUpgrades } from "../controllers/doYouNeedController/getGuildCharacters";

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
 * Route for adding a guild to a user's guilds.
 */
DoYouNeedRouter.post("/addGuildToUser", addGuildToUser);

/**
 * Gets player information from a boss table
 */
DoYouNeedRouter.post("/getGuildCharacters", getGuildCharacterUpgrades);
export default DoYouNeedRouter;
