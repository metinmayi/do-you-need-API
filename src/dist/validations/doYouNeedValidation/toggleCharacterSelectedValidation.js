"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zToggleCharacterSelectedValidation = void 0;
const zod_1 = require("zod");
const parser = zod_1.z.lazy(() => zod_1.z.object({
    characterId: zod_1.z.string().min(1),
    bossName: zod_1.z.string().min(1),
}));
function zToggleCharacterSelectedValidation(request) {
    const parsed = parser.safeParse(request);
    return parsed;
}
exports.zToggleCharacterSelectedValidation = zToggleCharacterSelectedValidation;
