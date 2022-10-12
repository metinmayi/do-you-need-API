"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExpressUser = void 0;
function isExpressUser(potentialUser) {
    return (typeof (potentialUser === null || potentialUser === void 0 ? void 0 : potentialUser.username) === "string" &&
        typeof (potentialUser === null || potentialUser === void 0 ? void 0 : potentialUser.id) === "number" &&
        "access_token" in potentialUser);
}
exports.isExpressUser = isExpressUser;
