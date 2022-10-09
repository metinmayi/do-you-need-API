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
exports.registerGuild = void 0;
const checkGMStatus_1 = require("../../helpers/blizzardHelpers/checkGMStatus");
const getGuildInformation_1 = require("../../helpers/blizzardHelpers/getGuildInformation");
const getRoster_1 = require("../../helpers/blizzardHelpers/getRoster");
const dbStoreGuild_1 = require("../../helpers/doYouNeedHelpers/dbStoreGuild");
const DYNResponse_1 = require("../../models/DYNResponse");
const registerGuildValidation_1 = require("../../validations/blizzardValidation/registerGuildValidation");
const dbAddGuildToUser_1 = require("../../helpers/blizzardHelpers/dbAddGuildToUser");
const constructGuild_1 = require("../../helpers/blizzardHelpers/constructGuild");
/**
 * Registers a guild to DoYouNeed.
 * Also adds that guild to the player's list of guilds.
 * @param req Express Request
 * @param res Express Response
 * @returns Void
 */
function registerGuild(req, res) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = new DYNResponse_1.DYNResponse();
            const user = {
                character: req.body.character.toLowerCase(),
                guild: req.body.guild,
                realm: req.body.realm.toLowerCase(),
                token: (_a = req.user) === null || _a === void 0 ? void 0 : _a.access_token,
            };
            const validation = (0, registerGuildValidation_1.registerGuildValidation)(user);
            if (!validation.success) {
                response.error = true;
                response.errorMessage = validation.error.message;
                return res.status(400).json(response);
            }
            const { character, guild, realm, token } = validation.data;
            const guildInformation = yield (0, getGuildInformation_1.getGuildInformation)(realm, guild.name, token);
            const rosterURL = guildInformation.roster.href;
            const roster = yield (0, getRoster_1.getRoster)(rosterURL, token);
            const isGM = yield (0, checkGMStatus_1.checkGMStatus)(roster, character);
            if (!isGM) {
                response.error = true;
                response.errorMessage = `${character} is not the Guildmaster of ${guild}`;
                return res.status(400).json(response);
            }
            const iGuild = (0, constructGuild_1.constructGuild)(guildInformation);
            const iUserGuild = Object.assign(Object.assign({}, iGuild), { playerRank: "0" });
            yield (0, dbStoreGuild_1.dbStoreGuild)(iGuild);
            if (!((_b = req.user) === null || _b === void 0 ? void 0 : _b.id)) {
                return;
            }
            yield (0, dbAddGuildToUser_1.dbAddGuildToUser)((_c = req.user) === null || _c === void 0 ? void 0 : _c.id, iUserGuild);
            return res.status(200).json(response);
        }
        catch (error) {
            res.sendStatus(500);
            console.log(error);
        }
    });
}
exports.registerGuild = registerGuild;
