"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = void 0;
async function logout(req, res) {
    req.logOut((error) => {
        if (!error) {
            return res.sendStatus(200);
        }
        res.sendStatus(500);
        console.log({ logout: error });
    });
}
exports.logout = logout;
