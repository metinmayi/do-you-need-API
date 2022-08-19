import axios from 'axios';
import { Request, Response } from 'express';
import { CHECK_TOKEN_URL, WOW_REGION } from '../../constants';

export const checkAccessToken = async (req: Request, res: Response) => {
  const token = req.user?.accessToken;

  if (typeof token !== 'string') {
    res
      .status(401)
      .json({ message: 'User does not have an active accessToken' });
    return;
  }

  const result = await axios(CHECK_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: `region=${WOW_REGION}&token=${token}`,
  });

  res.sendStatus(result.status);
};
