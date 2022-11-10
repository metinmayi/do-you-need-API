"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExpressUser = void 0;
function isExpressUser(potentialUser) {
    return (typeof potentialUser?.username === "string" &&
        typeof potentialUser?.id === "number" &&
        "access_token" in potentialUser);
}
exports.isExpressUser = isExpressUser;
