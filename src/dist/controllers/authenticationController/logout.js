"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = void 0;
/**
 * Function to logout a user from the session
 * @param req Express Request
 * @param res Express Response
 */
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
