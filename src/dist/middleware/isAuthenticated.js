"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
        return;
    }
    console.log("Invalid authentication. Possibly missing cookie");
    res.sendStatus(401);
};
exports.isAuthenticated = isAuthenticated;
