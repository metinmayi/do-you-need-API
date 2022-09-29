import { Request, Response } from "express";
import { dbAddGuildToUser } from "../../helpers/blizzardHelpers/dbAddGuildToUser";
import { zValidateAddGuildToUser } from "../../validations/doYouNeedValidation/validateAddGuildToUser";

export async function addGuildToUser(req: Request, res: Response) {
  try {
    // Validate request
    const validation = zValidateAddGuildToUser({
      guild: req.body,
      token: req.user?.accessToken,
    });
    if (!validation.success) {
      return res.status(403).json(validation.error.errors);
    }

    if (!req.user?._id) {
      return;
    }

    await dbAddGuildToUser(req.user?._id, validation.data.guild);
    return res.sendStatus(200);
  } catch (error: any) {
    res.sendStatus(500);
    console.log(error);
  }

  // Return
}
