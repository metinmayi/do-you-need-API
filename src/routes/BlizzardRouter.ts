/**
 * Routes for www.domain.com/blizzard
 */
const authURL =
  "https://eu.battle.net/oauth/authorize?region=eu&response_type=code&client_id=182681dbb88f41a28f5abe8e2782ab16&redirect_uri=http://localhost:8000/blizzard/getAccessToken&scope=wow.profile";
import express from "express";
import axios from "axios";

const BlizzardRouter = express.Router();
const CLIENT_ID = process.env.BLIZZARD_CLIENT_ID;
const CLIENT_SECRET = process.env.BLIZZARD_CLIENT_SECRET;

/**
 * Sends the user to blizzards authentication page
 */
BlizzardRouter.get("/authenticate", (req, res, next) => {
  res.redirect(authURL);
});

/**
 * Gets redirected here after authenticating with blizzard.
 * Use this to get accessToken
 */
BlizzardRouter.get("/getAccessToken", async (req, res, next) => {
  const { code } = req.query;
  const buffer = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const auth = buffer.toString("base64");

  try {
    const response = await axios("https://eu.battle.net/oauth/token", {
      method: "post",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: `redirect_uri=http://localhost:8000/blizzard/getAccessToken&grant_type=authorization_code&code=${code}`,
    });

    const token = response.data.access_token;

    const result = await axios(
      `https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_EU&access_token=${token}`
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  return res.redirect("http://localhost:3000");
});

export default BlizzardRouter;
