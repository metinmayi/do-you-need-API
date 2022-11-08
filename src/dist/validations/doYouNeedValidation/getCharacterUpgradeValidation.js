"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zValidateGetCharacterUpgrade = void 0;
const zod_1 = require("zod");
const zGetCharacterUpgradesValidation = zod_1.z.lazy(() => zod_1.z.object({
    guildId: zod_1.z.string(),
    bossName: zod_1.z.string(),
}));
function zValidateGetCharacterUpgrade(request) {
    const parsed = zGetCharacterUpgradesValidation.safeParse(request);
    return parsed;
}
exports.zValidateGetCharacterUpgrade = zValidateGetCharacterUpgrade;
