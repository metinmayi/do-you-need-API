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
exports.dbToggleCharacterUpgrade = void 0;
const database_1 = require("../../database/database");
function dbToggleCharacterUpgrade(characterId, bossName) {
    return __awaiter(this, void 0, void 0, function* () {
        const SQL = `UPDATE boss_upgrades
    SET selected = NOT selected
    WHERE boss_name=?
    AND character_id=?;`;
        yield database_1.pool.execute(SQL, [bossName, characterId]);
    });
}
exports.dbToggleCharacterUpgrade = dbToggleCharacterUpgrade;
