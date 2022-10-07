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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCharacterUpgrades = void 0;
const axios_1 = __importDefault(require("axios"));
const constructCharacter_1 = require("../../helpers/doYouNeedHelpers/constructCharacter");
const dbAddCharacterToGuild_1 = require("../../helpers/doYouNeedHelpers/dbAddCharacterToGuild");
const getPositiveUpgrades_1 = require("../../helpers/doYouNeedHelpers/getPositiveUpgrades");
const insertUpgrades_1 = require("../../helpers/doYouNeedHelpers/insertUpgrades");
const DYNResponse_1 = require("../../models/DYNResponse");
const addCharacterUpgradeValidation_1 = require("../../validations/doYouNeedValidation/addCharacterUpgradeValidation");
const validateInstanceAndDifficulty_1 = require("../../validations/doYouNeedValidation/validateInstanceAndDifficulty");
/**
 * Takes a raidbots URL and adds the character's upgrades to the guild.
 * @param req Express Request
 * @param res Express Response
 * @returns void
 */
const addCharacterUpgrades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = new DYNResponse_1.DYNResponse();
    const validation = (0, addCharacterUpgradeValidation_1.zAddCharacterUpgradeValidation)(req.body);
    if (!validation.success) {
        response.error = true;
        response.message = validation.error.message;
        return res.status(403).json(response);
    }
    // Does the fetch.
    try {
        const droptimizer = yield (0, axios_1.default)(`${validation.data.raidbotsURL}/data.json`).then((res) => res.data);
        const isValidInstance = (0, validateInstanceAndDifficulty_1.validateInstanceAndDifficulty)(droptimizer);
        if (!isValidInstance) {
            response.error = true;
            response.errorMessage = "Invalid instance and/or difficulty";
            return res.send(403).json(response);
        }
        const character = (0, constructCharacter_1.constructCharacter)(droptimizer);
        const positiveUpgrades = (0, getPositiveUpgrades_1.getPositiveUpgrades)(droptimizer);
        (0, insertUpgrades_1.insertUpgrades)(character, positiveUpgrades, droptimizer);
        yield (0, dbAddCharacterToGuild_1.dbAddCharacterToGuild)(character, validation.data.guild);
        res.sendStatus(200);
    }
    catch (error) {
        res.sendStatus(500);
        console.log({ addCharacterUpgrades: error });
    }
});
exports.addCharacterUpgrades = addCharacterUpgrades;
