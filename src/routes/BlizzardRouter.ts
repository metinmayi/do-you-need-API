/**
 * Routes for www.domain.com/blizzard
 */
import express from "express";
import axios from "axios";
import http from "http2";
const BlizzardRouter = express.Router();
const REGION = 'eu';
const REDIRECT_URI = 'http://localhost:8000/blizzard/getAccessToken';
const scope = 'wow.profile';
const CLIENT_ID = process.env.BLIZZARD_CLIENT;
const authorizeURL = `https://eu.battle.net/oauth/authorize?region=${REGION}&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const tokenURL = 'https://eu.battle.net/oauth/token';



BlizzardRouter.post('/authenticate', async (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({message: 'You are not authenticated with doYouNeed'});
    }

    const {code} = req.body;
    const u = '182681dbb88f41a28f5abe8e2782ab16:Vy14wuX0MRLq5UZbQbytmJb6bq2SNqCg';
    const buff = Buffer.from(u);
    const auth = buff.toString('base64');

    try {
        const response = await axios.post("https://eu.battle.net/oauth/token", {
            body: `redirect_uri=http://localhost:3000/synchronize&scope=wow.profile&grant_type=authorization_code&code=${code}`,
            headers: {
              Authorization: `Basic ${auth}`,
              "Content-Type": "application/x-www-form-urlencoded"
            },
          })
          res.sendStatus(200);

    } catch(error:any) {
        console.log(error.request['_options']);
        res.sendStatus(401);
    }
})

export default BlizzardRouter;
