"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCharactersGuildValidation = void 0;
const zod_1 = require("zod");
const zGetCharactersGuildValidation = zod_1.z
    .object({
    character: zod_1.z.string(),
    realm: zod_1.z.string(),
    token: zod_1.z.string(),
})
    .strict();
const GetCharactersGuildValidation = (reqQuery, token) => {
    reqQuery.token = token;
    const parsed = zGetCharactersGuildValidation.safeParse(reqQuery);
    return parsed;
};
exports.GetCharactersGuildValidation = GetCharactersGuildValidation;
