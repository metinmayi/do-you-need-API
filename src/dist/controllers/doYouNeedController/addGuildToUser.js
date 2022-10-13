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
exports.addGuildToUser = void 0;
const dbAddGuildToUser_1 = require("../../helpers/blizzardHelpers/dbAddGuildToUser");
const ExpressUser_1 = require("../../models/ExpressUser");
const validateAddGuildToUser_1 = require("../../validations/doYouNeedValidation/validateAddGuildToUser");
function addGuildToUser(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!(0, ExpressUser_1.isExpressUser)(req.user)) {
                return res.status(401).json("No express user found");
            }
            // Validate request
            const validation = (0, validateAddGuildToUser_1.zValidateAddGuildToUser)({
                guild: req.body,
                token: (_a = req.user) === null || _a === void 0 ? void 0 : _a.access_token,
            });
            if (!validation.success) {
                return res.status(403).json(validation.error.errors);
            }
            yield (0, dbAddGuildToUser_1.dbAddGuildToUser)((_b = req.user) === null || _b === void 0 ? void 0 : _b.id, validation.data.guild);
            return res.sendStatus(200);
        }
        catch (error) {
            res.sendStatus(500);
            console.log(error);
        }
    });
}
exports.addGuildToUser = addGuildToUser;
