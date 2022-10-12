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
exports.dbGetUserGuilds = void 0;
const database_1 = require("../../database/database");
/**
 * Gets an array of blizzard guild id's from the user's registered guilds
 * @param {number} userId The ID of the logged in user.
 * @returns {string[]} An array of the guild IDs
 */
function dbGetUserGuilds(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const SQL = "SELECT blizzard_guild_id FROM user_guilds WHERE user_id=?";
        debugger;
        const guilds = yield database_1.pool.execute(SQL, [userId]);
        return guilds[0];
    });
}
exports.dbGetUserGuilds = dbGetUserGuilds;
