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
function getPlayersRank(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = new DYNResponse_1.DYNResponse();
            req.body.token = (_a = req.user) === null || _a === void 0 ? void 0 : _a.access_token;
            const validation = (0, getPlayersRankValidation_1.getPlayersRankValidation)(req.body);
            if (!validation.success) {
                response.error = true;
                response.message = validation.error.message;
                return res.status(403).json(response);
            }
            const { characterName, guildName, guildRealm, token } = validation.data;
            const guildInformation = yield (0, getGuildInformation_1.getGuildInformation)(guildRealm, guildName, token);
            const rosterURL = guildInformation.roster.href;
            const roster = yield (0, getRoster_1.getRoster)(rosterURL, token);
            const { rank } = roster.find((member) => member.character.name === characterName);
            response.data = rank;
            res.status(200).json(response);
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error === null || error === void 0 ? void 0 : error.message);
        }
    });
}
exports.getPlayersRank = getPlayersRank;
