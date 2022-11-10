"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbToggleCharacterUpgrade = void 0;
const database_1 = require("../../database/database");
async function dbToggleCharacterUpgrade(characterId, bossName) {
    const SQL = `UPDATE boss_upgrades
    SET selected = NOT selected
    WHERE boss_name=?
    AND character_id=?;`;
    await database_1.pool.execute(SQL, [bossName, characterId]);
}
exports.dbToggleCharacterUpgrade = dbToggleCharacterUpgrade;
