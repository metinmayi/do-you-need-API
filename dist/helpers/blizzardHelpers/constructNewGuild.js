"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructNewGuild = void 0;
/**
 * Takes character information and constructs a new guild from it.
 * @param character The retrieved character from Blizzard's API
 * @returns {newGuild}
 */
const constructNewGuild = (character) => {
    const id = character.guild.id.toString();
    const name = character.guild.name;
    const realm = character.guild.realm.slug;
    const isNew = true;
    const faction = character.guild.faction.type;
    const license = "standard";
    const newGuild = {
        id,
        name,
        realm,
        isNew,
        faction,
        license,
        characters: [],
    };
    return newGuild;
};
exports.constructNewGuild = constructNewGuild;
