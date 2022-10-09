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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAccessToken = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../../constants");
/**
 * Checks the user's accessToken and validates it towards blizzard's API.
 * @param req Express Request
 * @param res Express Response
 * @returns void
 */
const checkAccessToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.user) === null || _a === void 0 ? void 0 : _a.access_token;
    if (!token) {
        res
            .status(403)
            .json({ message: "User does not have an active accessToken" });
        return;
    }
    try {
        const result = yield (0, axios_1.default)(constants_1.CHECK_TOKEN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: `region=${constants_1.WOW_REGION}&token=${token}`,
        });
        res.sendStatus(result.status);
    }
    catch (error) {
        console.log("checkAccessToken: " + error.message);
        res.status(error.response.status || 500).send(error.message);
    }
});
exports.checkAccessToken = checkAccessToken;
