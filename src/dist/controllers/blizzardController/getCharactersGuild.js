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
exports.getCharactersGuild = void 0;
const getCharacter_1 = require("../../helpers/blizzardHelpers/getCharacter");
const dbGuildStatus_1 = require("../../helpers/doYouNeedHelpers/dbGuildStatus");
const getCharactersGuildValidation_1 = require("../../validations/blizzardValidation/getCharactersGuildValidation");
const constructNewGuild_1 = require("../../helpers/blizzardHelpers/constructNewGuild");
const ExpressUser_1 = require("../../models/ExpressUser");
/**
 * Check's what guild the character is a member of through the blizzard API.
 * Then proceeds to check if that guild is registered in DoYouNeed.
 * @param req Express Request
 * @param res Express Response
 * @returns void
 */
function getCharactersGuild(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, ExpressUser_1.isExpressUser)(req.user)) {
            return res.sendStatus(401).json("No user found");
        }
        const validation = (0, getCharactersGuildValidation_1.GetCharactersGuildValidation)(req.query, req.user.access_token);
        if (!validation.success) {
            return res.status(403).json(validation.error.message);
        }
        try {
            const retrievedCharacter = yield (0, getCharacter_1.getCharacter)(validation.data.character, validation.data.realm, validation.data.token);
            const guild = yield (0, dbGuildStatus_1.dbGetGuildByBlizzardId)(retrievedCharacter.guild.id.toString());
            if (guild) {
                return res.status(200).json(guild);
            }
            const newGuild = (0, constructNewGuild_1.constructNewGuild)(retrievedCharacter);
            res.status(404).json(newGuild);
        }
        catch (error) {
            console.log("getGuildStatus" + error.message);
            res.status(500).json(error.message);
        }
    });
}
exports.getCharactersGuild = getCharactersGuild;
