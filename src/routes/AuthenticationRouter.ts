/**
 * Routes for www.domain.com/authentication
 */
import passport from "passport";
import "../controllers/authenticationController/passport";
import express from "express";
import { register } from "../controllers/authenticationController/register";
import { goodLogin } from "../controllers/authenticationController/goodLogin";
const AuthenticationRouter = express.Router();

/**
 * Register player
 */
AuthenticationRouter.post("/register", register);

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
AuthenticationRouter.get("/goodLogin", goodLogin);

/**
 * Bad Login
 */
AuthenticationRouter.get("/badLogin", (req, res, next) => {
  res.status(401).json({ message: "unauthorized" });
});

export default AuthenticationRouter;
