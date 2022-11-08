"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIGuild = void 0;
function isIGuild(object) {
    if (typeof object !== "object" || !object)
        return false;
    return (typeof object.blizzard_guild_id === "string" &&
        typeof object.name === "string" &&
        typeof object.realm === "string" &&
        typeof object.license === "string" &&
        typeof object.faction === "string");
}
exports.isIGuild = isIGuild;
