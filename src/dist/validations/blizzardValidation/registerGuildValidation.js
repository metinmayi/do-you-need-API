"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerGuildValidation = void 0;
const zod_1 = require("zod");
const zRegisterGuildSchema = zod_1.z.lazy(() => zod_1.z.object({
    character: zod_1.z.string(),
    token: zod_1.z.string(),
    realm: zod_1.z.string(),
    guild: zod_1.z.object({
        isNew: zod_1.z.boolean(),
        blizzard_id: zod_1.z.string(),
        license: zod_1.z.string(),
        name: zod_1.z.string(),
        realm: zod_1.z.string(),
        faction: zod_1.z.string(),
    }),
}));
const registerGuildValidation = (user) => {
    const parsed = zRegisterGuildSchema.safeParse(user);
    return parsed;
};
exports.registerGuildValidation = registerGuildValidation;
