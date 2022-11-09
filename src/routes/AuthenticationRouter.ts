/**
 * Routes for www.domain.com/authentication
 */
import passport from "passport";
import "../controllers/authenticationController/passport";
import express from "express";
import { goodLogin } from "../controllers/authenticationController/goodLogin";
import { register } from "../controllers/authenticationController/register";
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
  if (!req.isAuthenticated()) return res.status(401);
  res.redirect("goodLogin");
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
