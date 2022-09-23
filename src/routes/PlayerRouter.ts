/**
 * Routes for domain.com/player/
 */
import express from "express";
const PlayerRouter = express.Router();
import { Request, Response } from "express";
import { addPlayerUpgrades } from "../controllers/playerController/addPlayerUpgrades";
import { getBossTable } from "../controllers/playerController/getBossTable";
import { getBossTableValidation } from "../validations/doYouNeedValidation/getBossTableValidation";

PlayerRouter.get("/", (req: Request, res: Response) => {
  res.send("Reached PlayerRouter");
});

/**
 * Route for adding playerUpgrades to the database.
 */
PlayerRouter.post("/addPlayerUpgrades", addPlayerUpgrades);

/**
 * Gets player information from a boss table
 */
PlayerRouter.get("/getBossTable/", async (req: Request, res: Response) => {
  // Validate bossName
  const isValidated = getBossTableValidation(req.query.bossName?.toString());
  if (!isValidated) {
    return res.status(400).send("Invalid boss");
  }

  const result = await getBossTable("the_jailer");
  res.status(200).send(result?.[0]);
});
export default PlayerRouter;
