import { Request, Response } from "express";
import { zToggleCharacterSelectedValidation } from "../../validations/doYouNeedValidation/toggleCharacterSelectedValidation";
import { dbToggleCharacterUpgrade } from "./dbToggleCharacterUpgrade";

export async function toggleCharacterSelected(req: Request, res: Response) {
  try {
    const validate = zToggleCharacterSelectedValidation(req.body);
    if (!validate.success) {
      return res.sendStatus(400);
    }

    const { characterId, bossName } = validate.data;
    await dbToggleCharacterUpgrade(characterId, bossName);
    res.sendStatus(200);
  } catch (error: any) {
    console.log({ toggleCharacterSelected: error });
    res.sendStatus(500);
  }
}
