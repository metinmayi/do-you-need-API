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
exports.getCharacterUpgrades = void 0;
const formatDbUpgrade_1 = require("../../helpers/doYouNeedHelpers/formatDbUpgrade");
const isArray_1 = require("../../helpers/doYouNeedHelpers/isArray");
const getCharacterUpgradeValidation_1 = require("../../validations/doYouNeedValidation/getCharacterUpgradeValidation");
const dbGetBossUpgrade_1 = require("./dbGetBossUpgrade");
/**
 * Gets all boss_upgrades from characters of the specified guild
 * @param req Express request
 * @param res Express response
 * @returns {void}
 */
function getCharacterUpgrades(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const validation = (0, getCharacterUpgradeValidation_1.zValidateGetCharacterUpgrade)(req.body);
            if (!validation.success) {
                return res.status(400);
            }
            const { guildId, bossName } = validation.data;
            const characterUpgrades = yield (0, dbGetBossUpgrade_1.dbGetBossUpgrade)(guildId, bossName);
            if (!(0, isArray_1.isArray)(characterUpgrades)) {
                return res.status(200).json([]);
            }
            const formattedUpgrades = (0, formatDbUpgrade_1.formatDbUpgrade)(characterUpgrades, bossName);
            res.status(200).json(formattedUpgrades);
        }
        catch (error) {
            res.status(500).json({ errorMessage: error.message });
            console.log({ getCharacterUpgrades: error });
        }
    });
}
exports.getCharacterUpgrades = getCharacterUpgrades;
