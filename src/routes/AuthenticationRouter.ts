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

AuthenticationRouter.get("/goodLogin", (req, res, next) => {
  res.send("Good login!");
});

AuthenticationRouter.get("/badLogin", (req, res, next) => {
  res.sendStatus(401);
});

export default AuthenticationRouter;
