/**
 * Routes for www.domain.com/authorization
 */
import express from "express";
import { registerUser } from "../controllers/Authentication/register";
import { loginUser } from "../controllers/Authentication/login";
const AuthorizationRouter = express.Router();

/**
 * Register player
 */
AuthorizationRouter.post("/register", registerUser);

/**
 * Login player
 */
AuthorizationRouter.post("/login", loginUser);

export default AuthorizationRouter;
