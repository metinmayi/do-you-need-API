/**
 * Routes for domain.com/player/
 */
import express from "express";
const DoYouNeedRouter = express.Router();
import { Request, Response } from "express";
import { addPlayerUpgrades } from "../controllers/doYouNeedController/addPlayerUpgrades";
import { getBossTable } from "../controllers/doYouNeedController/getBossTable";
import { getBossTableValidation } from "../validations/doYouNeedValidation/getBossTableValidation";

DoYouNeedRouter.get("/", (req: Request, res: Response) => {
  res.send("Reached DoYouNeedRouter");
});

/**
 * Route for adding playerUpgrades to the database.
 */
DoYouNeedRouter.post("/addPlayerUpgrades", addPlayerUpgrades);

/**
 * Gets player information from a boss table
 */
DoYouNeedRouter.get("/getBossTable/", async (req: Request, res: Response) => {
  // Validate bossName
  const isValidated = getBossTableValidation(req.query.bossName?.toString());
  if (!isValidated) {
    return res.status(400).send("Invalid boss");
  }

  const result = await getBossTable("the_jailer");
  res.status(200).send(result?.[0]);
});
export default DoYouNeedRouter;
