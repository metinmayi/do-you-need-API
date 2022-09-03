/**
 * Middleware that forwards user if they are authenticated
 */
import { NextFunction, Request, Response } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        next();
        return;
    }
    res.sendStatus(401);
}