/**
 * Routes for domain.com/player/
 */
import express from "express";
const PlayerRouter = express.Router();
import { Request, Response } from "express";
import { reportURL } from "../constants";
import { addBossData } from "../controllers/addBossData";
import { addPlayerData } from "../controllers/PlayerController";

PlayerRouter.get("/", (req: Request, res: Response) => {
  res.send("Reached PlayerRouter");
});

PlayerRouter.post("/addBossData", async (req: Request, res: Response) => {
  // Validation
  try{
    const URLobject = new URL(req.body.url);
    const url = URLobject.origin + "/simbot/report/";
    if (url !== reportURL) {
      throw new Error('Invalid URL')
    }

  } catch(err) {
    return res.sendStatus(400);
  }
  // Execution
  const reportId = req.body.url.split("/")[5];
  const player = await addPlayerData(reportId);
  res.send(player);
});

export default PlayerRouter;
