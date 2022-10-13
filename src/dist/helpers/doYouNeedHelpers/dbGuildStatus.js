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
exports.dbGetGuildByBlizzardId = void 0;
const database_1 = require("../../database/database");
/**
 * Gets the guild from the database.
 * @param {string} id The guild's blizzard ID.
 * @returns
 */
const dbGetGuildByBlizzardId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const SQL = "SELECT blizzard_id, name, realm, license, faction FROM guilds WHERE blizzard_id=?";
    const response = yield database_1.pool.execute(SQL, [id]);
    return response[0][0];
});
exports.dbGetGuildByBlizzardId = dbGetGuildByBlizzardId;
