/**
 * Middleware that forwards user if they are authenticated
 */
import { NextFunction, Request, Response } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    debugger;
    if (req.isAuthenticated()) {
        next();
    }
    res.sendStatus(401);
}