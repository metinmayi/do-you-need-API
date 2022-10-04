import { Request, Response } from "express";
import {
  AUTHORIZE_URL,
  REDIRECT_URI,
  WOW_REGION,
  WOW_SCOPE,
} from "../../constants";
import dotenv from "dotenv";
dotenv.config();
const clientId = process.env.BLIZZARD_CLIENT_ID || "";
const AuthEndpoint = `${AUTHORIZE_URL}?region=${WOW_REGION}&response_type=code&client_id=${clientId}&redirect_uri=${REDIRECT_URI}&scope=${WOW_SCOPE}`;

/**
 * Entry point for the blizzard authentication chain.
 * @param req Express Request
 * @param res Express Response
 */
export const getAuthorizeCode = (req: Request, res: Response) => {
  res.redirect(AuthEndpoint);
};
