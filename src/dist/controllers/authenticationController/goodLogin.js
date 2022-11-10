"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goodLogin = void 0;
const dbGetUserGuilds_1 = require("../../helpers/doYouNeedHelpers/dbGetUserGuilds");
const ExpressUser_1 = require("../../models/ExpressUser");
/**
 * Login successful. Returns an array of the guild blizzardIDs connected to the logged in user.
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {void}
 */
async function goodLogin(req, res) {
    try {
        if (!(0, ExpressUser_1.isExpressUser)(req.user)) {
            res.status(404).send("No user found");
            return;
        }
        const guilds = await (0, dbGetUserGuilds_1.dbGetUserGuilds)(req.user.id);
        res.status(200).json(guilds);
    }
    catch (error) {
        console.log({ goodLogin: error });
        res.sendStatus(500);
    }
}
exports.goodLogin = goodLogin;
