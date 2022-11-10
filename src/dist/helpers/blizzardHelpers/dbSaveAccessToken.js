"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbSaveAccessToken = void 0;
const database_1 = require("../../database/database");
/**
 * Saves an accesstoken to the user in the database
 * @param accessToken Newly retrieved accessToken from Blizzard's API.
 * @param id ID of the user in the DB
 */
const dbSaveAccessToken = async (accessToken, id) => {
    const SQL = "UPDATE users SET access_token=? WHERE id=?";
    const result = await database_1.pool.execute(SQL, [accessToken, id]);
    console.log("Saved access token: " + result.toString());
};
exports.dbSaveAccessToken = dbSaveAccessToken;
