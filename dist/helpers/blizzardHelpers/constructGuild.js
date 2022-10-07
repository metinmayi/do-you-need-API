"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructGuild = void 0;
function constructGuild(guildInformation) {
    const guild = {
        id: guildInformation.id.toString(),
        name: guildInformation.name,
        realm: guildInformation.realm.slug,
        license: "standard",
        faction: guildInformation.faction.type,
        characters: [],
    };
    return guild;
}
exports.constructGuild = constructGuild;
