"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCharacterUpgrade = void 0;
const deleteCharacterUpgradeValidation_1 = require("../../validations/doYouNeedValidation/deleteCharacterUpgradeValidation");
const dbDeleteCharacterUpgrade_1 = require("./dbDeleteCharacterUpgrade");
async function deleteCharacterUpgrade(req, res) {
    try {
        const validation = (0, deleteCharacterUpgradeValidation_1.deleteCharacterUpgradeValidation)(req.body);
        if (!validation.success) {
            return res.sendStatus(400);
        }
        const { id } = validation.data;
        await (0, dbDeleteCharacterUpgrade_1.dbDeleteCharacterUpgrade)(id);
        res.sendStatus(200);
    }
    catch (error) {
        res.sendStatus(500);
        console.log({ deleteCharacterUpgrade: error });
    }
}
exports.deleteCharacterUpgrade = deleteCharacterUpgrade;
