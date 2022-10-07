import { Request, Response } from "express";
import { DYNResponse } from "../../models/DYNResponse";

export async function goodLogin(req: Request, res: Response) {
  const response = new DYNResponse();
  const guilds = req?.user?.guilds;

  response.data = guilds;
  res.status(200).json(response);
}
