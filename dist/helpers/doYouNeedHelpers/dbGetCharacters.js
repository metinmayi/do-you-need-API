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
exports.dbGetCharacters = void 0;
const GuildSchema_1 = require("../../mongoose/schemas/GuildSchema");
/**
 * Takes a guild ID and returns the guild
 * @param guildID ID of the guild
 * @returns {IGuild} The guild
 */
function dbGetCharacters(guildID) {
    return __awaiter(this, void 0, void 0, function* () {
        const foundGuild = yield GuildSchema_1.GuildModel.findOne({ id: guildID }).lean();
        return foundGuild;
    });
}
exports.dbGetCharacters = dbGetCharacters;
