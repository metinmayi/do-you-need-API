import { Request, Response } from "express";
import { DYNResponse } from "../../models/DYNResponse";

export async function goodLogin(req: Request, res: Response) {
  const response = new DYNResponse();
  const guilds = req?.user?.guilds;

  if (!guilds) {
    response.error = true;
    response.errorMessage = "The user is not connected to any guild.";
    return res.status(200).json(response);
  }

  response.data = guilds;
  res.status(200).json(response);
}
