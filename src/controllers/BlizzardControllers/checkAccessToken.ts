import axios from "axios"
import { Request, Response } from "express";
import { CHECK_TOKEN_URL, WOW_REGION } from "../../constants";


export const checkAccessToken = async (req: Request, res: Response) => {
    debugger;
    const token = req.user?.accessToken;

    if (typeof token !== 'string') {
        res.sendStatus(400);
        return;
    }

    const result = await axios(CHECK_TOKEN_URL,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        data: `region=${WOW_REGION}&token=${token}`
    });
    console.log(result);
    
    // if response is good, sendStatus(200)
    // else sendStatus(401);
}

