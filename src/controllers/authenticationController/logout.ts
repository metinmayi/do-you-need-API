import { Request, Response } from "express";

/**
 * Function to logout a user from the session
 * @param req Express Request
 * @param res Express Response
 */
export async function logout(req: Request, res: Response) {
  req.logOut((error) => {
    if (!error) {
      return res.sendStatus(200);
    }

    res.sendStatus(500);
    console.log({ logout: error });
  });
}
