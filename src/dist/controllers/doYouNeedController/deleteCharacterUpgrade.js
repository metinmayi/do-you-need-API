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
exports.deleteCharacterUpgrade = void 0;
const deleteCharacterUpgradeValidation_1 = require("../../validations/doYouNeedValidation/deleteCharacterUpgradeValidation");
const dbDeleteCharacterUpgrade_1 = require("./dbDeleteCharacterUpgrade");
function deleteCharacterUpgrade(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const validation = (0, deleteCharacterUpgradeValidation_1.deleteCharacterUpgradeValidation)(req.body);
            if (!validation.success) {
                return res.sendStatus(400);
            }
            const { id } = validation.data;
            yield (0, dbDeleteCharacterUpgrade_1.dbDeleteCharacterUpgrade)(id);
            res.sendStatus(200);
        }
        catch (error) {
            res.sendStatus(500);
            console.log({ deleteCharacterUpgrade: error });
        }
    });
}
exports.deleteCharacterUpgrade = deleteCharacterUpgrade;
