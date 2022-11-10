"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGuildToUser = void 0;
const dbAddGuildToUser_1 = require("../../helpers/blizzardHelpers/dbAddGuildToUser");
const ExpressUser_1 = require("../../models/ExpressUser");
const validateAddGuildToUser_1 = require("../../validations/doYouNeedValidation/validateAddGuildToUser");
async function addGuildToUser(req, res) {
    try {
        if (!(0, ExpressUser_1.isExpressUser)(req.user)) {
            return res.status(401).json("No user found");
        }
        // Validate request
        const validation = (0, validateAddGuildToUser_1.zValidateAddGuildToUser)({
            guild: req.body,
            token: req.user?.access_token,
        });
        if (!validation.success) {
            return res.status(403).json(validation.error.errors);
        }
        await (0, dbAddGuildToUser_1.dbAddGuildToUser)(req.user?.id, validation.data.guild);
        return res.sendStatus(200);
    }
    catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}
exports.addGuildToUser = addGuildToUser;
