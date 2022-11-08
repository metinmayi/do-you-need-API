"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructGuild = void 0;
function constructGuild(guildInformation) {
    const guild = {
        blizzard_guild_id: guildInformation.id.toString(),
        name: guildInformation.name,
        realm: guildInformation.realm.slug,
        license: "standard",
        faction: guildInformation.faction.type,
    };
    return guild;
}
exports.constructGuild = constructGuild;
