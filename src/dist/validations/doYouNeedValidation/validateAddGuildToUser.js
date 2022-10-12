"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zValidateAddGuildToUser = void 0;
const zod_1 = require("zod");
const zAddGuildToUserSchema = zod_1.z.lazy(() => zod_1.z.object({
    guild: zod_1.z.object({
        blizzard_id: zod_1.z.string(),
        name: zod_1.z.string(),
        realm: zod_1.z.string(),
        license: zod_1.z.string(),
        faction: zod_1.z.string(),
        characters: zod_1.z.array(zod_1.z.any()),
    }),
    token: zod_1.z.string(),
}));
function zValidateAddGuildToUser(request) {
    const parsed = zAddGuildToUserSchema.safeParse(request);
    return parsed;
}
exports.zValidateAddGuildToUser = zValidateAddGuildToUser;
