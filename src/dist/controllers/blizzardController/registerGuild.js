"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerGuild = void 0;
const checkGMStatus_1 = require("../../helpers/blizzardHelpers/checkGMStatus");
const getGuildInformation_1 = require("../../helpers/blizzardHelpers/getGuildInformation");
const getRoster_1 = require("../../helpers/blizzardHelpers/getRoster");
const registerGuildValidation_1 = require("../../validations/blizzardValidation/registerGuildValidation");
const constructGuild_1 = require("../../helpers/blizzardHelpers/constructGuild");
const dbStoreGuild_1 = require("../../helpers/doYouNeedHelpers/dbStoreGuild");
const dbStoreUsersGuild_1 = require("../../helpers/doYouNeedHelpers/dbStoreUsersGuild");
const ExpressUser_1 = require("../../models/ExpressUser");
/**
 * Registers a guild to DoYouNeed.
 * Also adds that guild to the player's list of guilds.
 * @param req Express Request
 * @param res Express Response
 * @returns Void
 */
async function registerGuild(req, res) {
    if (!(0, ExpressUser_1.isExpressUser)(req.user)) {
        return res.status(401).json("No user found");
    }
    try {
        const user = {
            character: req.body.character.toLowerCase(),
            guild: req.body.guild,
            realm: req.body.realm.toLowerCase(),
            token: req.user?.access_token,
        };
        const validation = (0, registerGuildValidation_1.registerGuildValidation)(user);
        if (!validation.success) {
            return res.status(403).json("Bad payload");
        }
        const { character, guild, realm, token } = validation.data;
        const guildInformation = await (0, getGuildInformation_1.getGuildInformation)(realm, guild.name, token);
        const rosterURL = guildInformation.roster.href;
        const roster = await (0, getRoster_1.getRoster)(rosterURL, token);
        const isGM = await (0, checkGMStatus_1.checkGMStatus)(roster, character);
        if (!isGM) {
            return res.status(401).json("Character is not the GM");
        }
        const iGuild = (0, constructGuild_1.constructGuild)(guildInformation);
        await (0, dbStoreGuild_1.dbStoreGuild)(iGuild);
        await (0, dbStoreUsersGuild_1.dbStoreUserGuild)(iGuild.blizzard_guild_id, req.user?.id, 0);
        return res.status(200).json("Success");
    }
    catch (error) {
        res.sendStatus(500);
        console.log({ registerGuild: error });
    }
}
exports.registerGuild = registerGuild;
