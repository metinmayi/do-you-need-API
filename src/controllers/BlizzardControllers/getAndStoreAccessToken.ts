import axios from "axios";
import { Request, Response } from "express";
import { REDIRECT_URI, GET_TOKEN_URL, SYNC_URL } from "../../constants";
import { getBasicAuth } from "./BlizzardUtils/getBasicAuth";
import { saveAccessToken } from "./BlizzardUtils/saveAccessToken";

/**
 *
 * @param {string} code User authorization code, retrieved from authenticating on Blizzard website
 */
export const getAndStoreAccessToken = async (req: Request, res: Response) => {
  const { code } = req.query;
  const userId = req.user?._id;
  if (typeof code !== "string") {
    res.status(401).json({ message: "Invalid code received" });
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
    await saveAccessToken(token, userId);
    res.redirect(SYNC_URL);
  } catch (error) {
    console.log(error);
    res.redirect(SYNC_URL);
  }
};
