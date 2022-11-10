"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbDeleteCharacterUpgrade = void 0;
const database_1 = require("../../database/database");
async function dbDeleteCharacterUpgrade(id) {
    const SQL = "DELETE FROM boss_upgrades WHERE character_id=?";
    const result = await database_1.pool.execute(SQL, [id]);
}
exports.dbDeleteCharacterUpgrade = dbDeleteCharacterUpgrade;
