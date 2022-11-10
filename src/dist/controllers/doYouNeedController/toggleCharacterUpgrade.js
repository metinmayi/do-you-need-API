"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleCharacterSelected = void 0;
const toggleCharacterSelectedValidation_1 = require("../../validations/doYouNeedValidation/toggleCharacterSelectedValidation");
const dbToggleCharacterUpgrade_1 = require("./dbToggleCharacterUpgrade");
async function toggleCharacterSelected(req, res) {
    try {
        const validate = (0, toggleCharacterSelectedValidation_1.zToggleCharacterSelectedValidation)(req.body);
        if (!validate.success) {
            return res.sendStatus(400);
        }
        const { characterId, bossName } = validate.data;
        await (0, dbToggleCharacterUpgrade_1.dbToggleCharacterUpgrade)(characterId, bossName);
        res.sendStatus(200);
    }
    catch (error) {
        console.log({ toggleCharacterSelected: error });
        res.sendStatus(500);
    }
}
exports.toggleCharacterSelected = toggleCharacterSelected;
