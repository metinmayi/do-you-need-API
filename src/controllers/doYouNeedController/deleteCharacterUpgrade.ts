import { Request, Response } from "express";
import { deleteCharacterUpgradeValidation } from "../../validations/doYouNeedValidation/deleteCharacterUpgradeValidation";
import { dbDeleteCharacterUpgrade } from "./dbDeleteCharacterUpgrade";

export async function deleteCharacterUpgrade(req: Request, res: Response) {
  try {
    const validation = deleteCharacterUpgradeValidation(req.body);
    if (!validation.success) {
      return res.sendStatus(400);
    }

    const { id } = validation.data;
    await dbDeleteCharacterUpgrade(id);
    res.sendStatus(200);
  } catch (error: any) {
    res.sendStatus(500);
    console.log({ deleteCharacterUpgrade: error });
  }
}
