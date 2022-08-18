import axios from "axios";
import { REDIRECT_URI, GET_TOKEN_URL } from "../../../constants";
import { getBasicAuth } from "./getBasicAuth";


export const getAccessToken = async (code: string) => {

    const Authorization = getBasicAuth();

    try {
      const response = await axios(GET_TOKEN_URL, {
        method: "post",
        headers: {
          Authorization,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: `redirect_uri=${REDIRECT_URI}&grant_type=authorization_code&code=${code}`,
      });
  
      const token = response.data.access_token;
      return token;
 
    } catch (error) {
      console.log(error);
      return {};
    }
}