"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBossTableValidation = void 0;
const constants_1 = require("../../constants");
const getBossTableValidation = (bossName) => {
    try {
        const validBossNames = Object.values(constants_1.IdToBoss);
        if (!bossName || !validBossNames.includes(bossName)) {
            throw new Error("Invalid bossName requested");
        }
        return true;
    }
    catch (error) {
        console.log("getBossTableValidation: " + error);
    }
};
exports.getBossTableValidation = getBossTableValidation;
