import axios from "axios";
import { Request, Response } from "express";
import { CHECK_TOKEN_URL, WOW_REGION } from "../../constants";

export const checkAccessToken = async (req: Request, res: Response) => {
  const token = req.user?.accessToken;

  if (!token) {
    res
      .status(403)
      .json({ message: "User does not have an active accessToken" });
    return;
  }

  try {
    const result = await axios(CHECK_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: `region=${WOW_REGION}&token=${token}`,
    });

    res.sendStatus(result.status);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};