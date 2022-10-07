"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const guildSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    realm: { type: String, required: true },
    license: { type: String, required: true },
    faction: { type: String, required: true },
    characters: { type: (Array), required: true },
});
exports.GuildModel = mongoose_1.default.model("guilds", guildSchema);
