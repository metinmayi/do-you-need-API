"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function goodLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!(0, ExpressUser_1.isExpressUser)(req.user)) {
                res.status(404).send("No user found");
                return;
            }
            const guilds = yield (0, dbGetUserGuilds_1.dbGetUserGuilds)(req.user.id);
            res.status(200).json(guilds);
        }
        catch (error) {
            console.log({ goodLogin: error });
            res.sendStatus(500);
        }
    });
}
exports.goodLogin = goodLogin;
