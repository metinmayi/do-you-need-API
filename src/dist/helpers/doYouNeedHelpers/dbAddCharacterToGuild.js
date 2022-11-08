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
exports.dbAddCharacterToGuild = void 0;
const GuildSchema_1 = require("../../mongoose/schemas/GuildSchema");
/**
 * Takes a character and inserts it into the guild's characters
 * @param {ICharacter} character Character object
 * @param {IGuild} guild Guild Object
 */
function dbAddCharacterToGuild(character, guild) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield GuildSchema_1.GuildModel.updateOne({ id: guild.blizzard_guild_id }, { $push: { characters: character } });
        }
        catch (error) {
            console.log({ dbAddCharacterToGuild: error });
        }
    });
}
exports.dbAddCharacterToGuild = dbAddCharacterToGuild;
