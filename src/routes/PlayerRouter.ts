/**
 * Routes for domain.com/player/
 */
import express from "express";
const PlayerRouter = express.Router();
import { Request, Response } from "express";
import { getBossTable } from "../controllers/doYouNeed/getBossTable";
import { addPlayerData } from "../controllers/doYouNeed/PlayerController";
import { addPlayerDataValidation } from "../validations/doYouNeedValidation/addPlayerDataValidation";
import { getBossTableValidation } from "../validations/doYouNeedValidation/getBossTableValidation";

PlayerRouter.get("/", (req: Request, res: Response) => {
  res.send("Reached PlayerRouter");
});

/**
 * Route for adding playerUpgrades to the database.
 */
PlayerRouter.post("/addPlayerData", async (req: Request, res: Response) => {
  // Validation
  const isValidated = addPlayerDataValidation(req.body.url);
  if (!isValidated) return res.status(400).send("Invalid Simbot URL");

  try {
    const reportId = req.body.url.split("/")[5];
    await addPlayerData(reportId);
    res.status(200).send("Player has been added to the tables");
  } catch (err) {
    return res.sendStatus(400);
  }
});

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
