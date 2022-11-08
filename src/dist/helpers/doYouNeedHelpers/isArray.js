"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = void 0;
function isArray(testObject) {
    return typeof testObject.length === "number";
}
exports.isArray = isArray;
