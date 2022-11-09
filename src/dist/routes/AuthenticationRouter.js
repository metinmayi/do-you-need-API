"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Routes for www.domain.com/authentication
 */
const passport_1 = __importDefault(require("passport"));
require("../controllers/authenticationController/passport");
const express_1 = __importDefault(require("express"));
const goodLogin_1 = require("../controllers/authenticationController/goodLogin");
const register_1 = require("../controllers/authenticationController/register");
const AuthenticationRouter = express_1.default.Router();
/**
 * Register player
 */
AuthenticationRouter.post("/register", register_1.register);
/**
 * Login player
 */
AuthenticationRouter.post("/login", passport_1.default.authenticate("local", {
    successRedirect: "goodLogin",
    failureRedirect: "badLogin",
}));
AuthenticationRouter.get("/isAuthenticated", (req, res, next) => {
    if (!req.isAuthenticated())
        return res.sendStatus(401);
    res.redirect("goodLogin");
});
/**
 * Good Login
 */
AuthenticationRouter.get("/goodLogin", goodLogin_1.goodLogin);
/**
 * Bad Login
 */
AuthenticationRouter.get("/badLogin", (req, res, next) => {
    res.status(401).json({ message: "unauthorized" });
});
exports.default = AuthenticationRouter;
