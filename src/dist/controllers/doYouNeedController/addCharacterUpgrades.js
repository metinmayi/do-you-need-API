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
const getBestUpgradesPerSlot_1 = require("../../helpers/doYouNeedHelpers/getBestUpgradesPerSlot");
const getPositiveUpgrades_1 = require("../../helpers/doYouNeedHelpers/getPositiveUpgrades");
const addCharacterUpgradeValidation_1 = require("../../validations/doYouNeedValidation/addCharacterUpgradeValidation");
const validateInstanceAndDifficulty_1 = require("../../validations/doYouNeedValidation/validateInstanceAndDifficulty");
const dbAddBossUpgrades_1 = require("./dbAddBossUpgrades");
const dbAddCharacter_1 = require("./dbAddCharacter");
/**
 * Takes a raidbots URL and adds the character's upgrades to the guild.
 * @param req Express Request
 * @param res Express Response
 * @returns void
 */
const addCharacterUpgrades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validation = (0, addCharacterUpgradeValidation_1.zAddCharacterUpgradeValidation)(req.body);
    if (!validation.success) {
        return res.status(400).json(validation.error.message);
    }
    // Does the fetch.
    try {
        const droptimizer = yield (0, axios_1.default)(`${validation.data.raidbotsURL}/data.json`).then((res) => res.data);
        const isValidInstance = (0, validateInstanceAndDifficulty_1.validateInstanceAndDifficulty)(droptimizer);
        if (!isValidInstance) {
            return res.send(400).json("Invalid instance and/or difficulty");
        }
        const character = (0, constructCharacter_1.constructCharacter)(droptimizer);
        yield (0, dbAddCharacter_1.dbAddCharacter)(character, validation.data.guild.blizzard_guild_id);
        const positiveUpgrades = (0, getPositiveUpgrades_1.getPositiveUpgrades)(droptimizer);
        const bestUpgradesPerSlot = (0, getBestUpgradesPerSlot_1.getBestUpgradesPerSlot)(positiveUpgrades, droptimizer);
        const meanDPS = droptimizer.sim.statistics.raid_dps.mean;
        for (const upgrade of bestUpgradesPerSlot) {
            yield (0, dbAddBossUpgrades_1.dbAddBossUpgrades)(character.blizzardId, upgrade, meanDPS);
        }
        res.sendStatus(200);
    }
    catch (error) {
        res.sendStatus(500);
        console.log({ addCharacterUpgrades: error });
    }
});
exports.addCharacterUpgrades = addCharacterUpgrades;
