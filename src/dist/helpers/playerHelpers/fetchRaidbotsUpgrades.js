"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRaidbotsUpgrades = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Takes a raidbots URL and returns the upgrades in a JSON format.
 * @param raidbotsURL The URL to the raidbots simulation.
 * @returns
 */
const fetchRaidbotsUpgrades = async (raidbotsURL) => {
    try {
        const fetchURL = `https://www.raidbots.com/reports/${raidbotsURL}/data.json`;
        const response = await (0, axios_1.default)(fetchURL);
        return response.data;
    }
    catch (e) {
        throw new Error("Couldn't fetch data from raidbots");
    }
};
exports.fetchRaidbotsUpgrades = fetchRaidbotsUpgrades;
