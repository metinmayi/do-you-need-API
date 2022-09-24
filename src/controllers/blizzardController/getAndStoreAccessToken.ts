import axios from "axios";
import { Request, Response } from "express";
import { REDIRECT_URI, GET_TOKEN_URL, SYNC_URL } from "../../constants";
import { getBasicAuth } from "../../helpers/blizzardHelpers/getBasicAuth";
import { dbSaveAccessToken } from "../../helpers/blizzardHelpers/dbSaveAccessToken";

/**
 * Gets a new user access token from blizzard API and stores it in the user's table.
 * @param req Express Request - Code is in the query
 * @param res Express Response
 */
export const getAndStoreAccessToken = async (req: Request, res: Response) => {
  const { code } = req.query;
  const userId = req.user?._id;
  if (typeof code !== "string") {
    res.status(401).json({ message: "Invalid code received" });
    return;
  }

  if (!userId) {
    res.status(401).json({ message: "Invalid user id" });
    return;
  }

  const Authorization = getBasicAuth();

  try {
    const response = await axios(GET_TOKEN_URL, {
      method: "post",
      headers: {
        Authorization,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: `redirect_uri=${REDIRECT_URI}&grant_type=authorization_code&code=${code}`,
    });

    const token = response.data.access_token;
    await dbSaveAccessToken(token, userId);
    res.redirect(SYNC_URL);
  } catch (error: any) {
    console.log("getAndStoreAccessToken: " + error.message);
    res.redirect(SYNC_URL);
  }
};
