import passport from "passport";
import "../config/passport/";
/**
 * Routes for www.domain.com/authentication
 */
import express from "express";
import { registerUser } from "../controllers/Authentication/register";
// import { loginUser } from "../controllers/Authentication/login";
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
    successRedirect: "/goodLogin",
    failureRedirect: "/badLogin",
  })
);

AuthenticationRouter.get("/goodLogin", (req, res, next) => {
  res.send("Good Login");
});
AuthenticationRouter.get("/badLogin", (req, res, next) => {
  res.send(" badLogin");
});

export default AuthenticationRouter;
