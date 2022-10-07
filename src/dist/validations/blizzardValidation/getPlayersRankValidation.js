"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayersRankValidation = void 0;
const zod_1 = require("zod");
const zGetPlayersRankSchema = zod_1.z
    .object({
    characterName: zod_1.z.string(),
    guildName: zod_1.z.string(),
    guildRealm: zod_1.z.string(),
    token: zod_1.z.string(),
})
    .strict();
const getPlayersRankValidation = (request) => {
    const parsed = zGetPlayersRankSchema.safeParse(request);
    return parsed;
};
exports.getPlayersRankValidation = getPlayersRankValidation;
