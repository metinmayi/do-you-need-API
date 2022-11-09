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
exports.toggleCharacterSelected = void 0;
const toggleCharacterSelectedValidation_1 = require("../../validations/doYouNeedValidation/toggleCharacterSelectedValidation");
const dbToggleCharacterUpgrade_1 = require("./dbToggleCharacterUpgrade");
function toggleCharacterSelected(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const validate = (0, toggleCharacterSelectedValidation_1.zToggleCharacterSelectedValidation)(req.body);
            if (!validate.success) {
                return res.sendStatus(400);
            }
            const { characterId, bossName } = validate.data;
            yield (0, dbToggleCharacterUpgrade_1.dbToggleCharacterUpgrade)(characterId, bossName);
            res.sendStatus(200);
        }
        catch (error) {
            console.log({ toggleCharacterSelected: error });
            res.sendStatus(500);
        }
    });
}
exports.toggleCharacterSelected = toggleCharacterSelected;
