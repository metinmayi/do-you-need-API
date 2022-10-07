"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbSaveAccessToken = void 0;
const UserSchema_1 = require("../../mongoose/schemas/UserSchema");
/**
 * Saves an accesstoken to the user in the database
 * @param accessToken Newly retrieved accessToken from Blizzard's API.
 * @param id ID of the user in the DB
 */
const dbSaveAccessToken = (accessToken, id) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = id.toString();
    yield UserSchema_1.UserModel.updateOne({ _id }, { accessToken });
});
exports.dbSaveAccessToken = dbSaveAccessToken;
