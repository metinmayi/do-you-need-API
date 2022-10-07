"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUser = void 0;
class IUser {
    constructor(username, password, email) {
        this.guilds = [];
        this.accessToken = "";
        this.username = username;
        this.password = password;
        this.email = email;
        this.createdAt = Date.now();
    }
}
exports.IUser = IUser;
