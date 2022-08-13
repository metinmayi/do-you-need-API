import passport from "passport";
import "../config/passport/";
/**
 * Routes for www.domain.com/authentication
 */
import express from "express";
import { registerUser } from "../controllers/Authentication/register";
const AuthenticationRouter = express.Router();

/**
 * Register player
 */
AuthenticationRouter.post("/register", registerUser);

/**
 * Login player
 */
AuthenticationRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "goodLogin",
    failureRedirect: "badLogin",
  })
);

AuthenticationRouter.get("/isAuthenticated", (req, res, next) => {
  if (req.isAuthenticated()) return res.status(200).json(req.user);
  res.sendStatus(401);
});

/**
 * Good Login
 */
AuthenticationRouter.get("/goodLogin", (req, res, next) => {
  res.status(200).json(req.user);
});

/**
 * Bad Login
 */
AuthenticationRouter.get("/badLogin", (req, res, next) => {
  res.status(401).json({ message: "unauthorized" });
});

export default AuthenticationRouter;
