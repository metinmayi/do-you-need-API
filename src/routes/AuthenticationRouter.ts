/**
 * Routes for www.domain.com/authorization
 */
import express from "express";
import { registerUser } from "../controllers/Authentication/register";
import { loginUser } from "../controllers/Authentication/login";
const AuthenticationRouter = express.Router();

/**
 * Register player
 */
AuthenticationRouter.post("/register", registerUser);

/**
 * Login player
 */
AuthenticationRouter.post("/login", loginUser);

export default AuthenticationRouter;
