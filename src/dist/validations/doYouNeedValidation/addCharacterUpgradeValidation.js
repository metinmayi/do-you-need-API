"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zAddCharacterUpgradeValidation = void 0;
const zod_1 = require("zod");
const zAddCharacterUpgradeSchema = zod_1.z.lazy(() => zod_1.z.object({
    guild: zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
        realm: zod_1.z.string(),
        license: zod_1.z.string(),
        faction: zod_1.z.string(),
        characters: zod_1.z.array(zod_1.z.any()),
    }),
    raidbotsURL: zod_1.z
        .string()
        .regex(/https:\/\/www.raidbots.com\/simbot\/report\/\w+/),
}));
function zAddCharacterUpgradeValidation(request) {
    const parsed = zAddCharacterUpgradeSchema.safeParse(request);
    return parsed;
}
exports.zAddCharacterUpgradeValidation = zAddCharacterUpgradeValidation;
