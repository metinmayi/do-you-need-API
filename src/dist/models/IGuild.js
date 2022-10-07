"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIGuild = void 0;
function isIGuild(object) {
    if (typeof object !== "object" || !object)
        return false;
    return (typeof object.id === "string" &&
        typeof object.name === "string" &&
        typeof object.realm === "string" &&
        typeof object.license === "string" &&
        typeof object.faction === "string" &&
        typeof object.characters === "object");
}
exports.isIGuild = isIGuild;
