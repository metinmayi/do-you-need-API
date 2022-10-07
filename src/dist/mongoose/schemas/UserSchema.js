"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: { type: Number, required: true },
    guilds: {
        type: [],
        required: false,
        set: (a) => (a === "" ? undefined : a),
    },
    accessToken: {
        type: String,
        required: false,
        set: (a) => (a === "" ? undefined : a),
    },
});
exports.UserModel = mongoose_1.default.model("users", userSchema);
