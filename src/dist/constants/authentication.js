"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD_REGEX = exports.USERNAME_REGEX = void 0;
const config_1 = require("./config");
exports.USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/;
exports.PASSWORD_REGEX = config_1.ENVIRONMENT === "production"
    ? /.(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@"#$%]).{8,24}$/
    : /./;
