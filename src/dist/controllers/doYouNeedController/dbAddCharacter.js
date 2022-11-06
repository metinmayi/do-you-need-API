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
exports.dbAddCharacter = void 0;
const database_1 = require("../../database/database");
/**
 * Adds a new character to the character table in the DB.
 * @param {ICharacter} character The character
 */
function dbAddCharacter(character) {
    return __awaiter(this, void 0, void 0, function* () {
        const { selected, name, charClass, role, blizzardId } = character;
        const SQL = "INSERT INTO characters(selected, name, class, role, blizzard_id) VALUES(?,?,?,?,?) ON DUPLICATE KEY UPDATE name=name";
        yield database_1.pool.execute(SQL, [selected, name, charClass, role, blizzardId]);
    });
}
exports.dbAddCharacter = dbAddCharacter;
