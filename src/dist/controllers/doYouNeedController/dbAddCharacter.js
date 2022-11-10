"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbAddCharacter = void 0;
const database_1 = require("../../database/database");
/**
 * Adds a new character to the character table in the DB.
 * @param {ICharacter} character The character
 */
async function dbAddCharacter(character, guildID) {
    const { name, charClass, role, blizzardId } = character;
    const SQL = "INSERT INTO characters( name, class, role, character_id, blizzard_guild_id) VALUES(?,?,?,?, ?) ON DUPLICATE KEY UPDATE name=name";
    await database_1.pool.execute(SQL, [name, charClass, role, blizzardId, guildID]);
}
exports.dbAddCharacter = dbAddCharacter;
