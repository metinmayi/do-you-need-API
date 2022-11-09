"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCharacterUpgradeValidation = void 0;
const zod_1 = require("zod");
const zDeleteCharacterUpgradeValidation = zod_1.z.lazy(() => zod_1.z.object({
    id: zod_1.z.string().min(1),
}));
function deleteCharacterUpgradeValidation(request) {
    const parsed = zDeleteCharacterUpgradeValidation.safeParse(request);
    return parsed;
}
exports.deleteCharacterUpgradeValidation = deleteCharacterUpgradeValidation;
