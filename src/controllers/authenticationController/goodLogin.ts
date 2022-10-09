import { Request, Response } from "express";
import { DYNResponse } from "../../models/DYNResponse";

export async function goodLogin(req: Request, res: Response) {
  const response = new DYNResponse();

  response.data = ["This needs to be fixed"];
  res.status(200).json(response);
}
