/**
 * Routes for www.domain.com/authorization
 */
import express from "express";
import { registerUser } from "../controllers/Authorization/register";
const AuthorizationRouter = express.Router();

/**
 * Register player
 */
AuthorizationRouter.post("/register", registerUser);

export default AuthorizationRouter;
