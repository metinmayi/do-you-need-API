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
exports.goodLogin = void 0;
const DYNResponse_1 = require("../../models/DYNResponse");
function goodLogin(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const response = new DYNResponse_1.DYNResponse();
        const guilds = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.guilds;
        if (!guilds) {
            response.error = true;
            response.errorMessage = "The user is not connected to any guild.";
            return res.status(200).json(response);
        }
        response.data = guilds;
        res.status(200).json(response);
    });
}
exports.goodLogin = goodLogin;
