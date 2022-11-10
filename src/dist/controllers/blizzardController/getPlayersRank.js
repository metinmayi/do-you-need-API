"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayersRank = void 0;
const getGuildInformation_1 = require("../../helpers/blizzardHelpers/getGuildInformation");
const getRoster_1 = require("../../helpers/blizzardHelpers/getRoster");
const DYNResponse_1 = require("../../models/DYNResponse");
const getPlayersRankValidation_1 = require("../../validations/blizzardValidation/getPlayersRankValidation");
/**
 * Checks the blizzard API for the user's rank within the specified guild.
 * Also adds that guild to the user's list of guilds in the DB.
 * @param req Express Request
 * @param res Express Reponse
 * @returns Void
 */
async function getPlayersRank(req, res) {
    try {
        const response = new DYNResponse_1.DYNResponse();
        req.body.token = req.user?.access_token;
        const validation = (0, getPlayersRankValidation_1.getPlayersRankValidation)(req.body);
        if (!validation.success) {
            response.error = true;
            response.message = validation.error.message;
            return res.status(403).json(response);
        }
        const { characterName, guildName, guildRealm, token } = validation.data;
        const guildInformation = await (0, getGuildInformation_1.getGuildInformation)(guildRealm, guildName, token);
        const rosterURL = guildInformation.roster.href;
        const roster = await (0, getRoster_1.getRoster)(rosterURL, token);
        const { rank } = roster.find((member) => member.character.name === characterName);
        response.data = rank;
        res.status(200).json(response);
    }
    catch (error) {
        console.log({ getPLayersRank: error });
        res.status(500).send(error?.message);
    }
}
exports.getPlayersRank = getPlayersRank;
