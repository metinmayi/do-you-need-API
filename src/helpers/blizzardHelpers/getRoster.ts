import axios from "axios";

export async function getRoster(URL: string, token:string){
    const response = await axios(`${URL}&access_token=${token}`);
    const roster = response.data.members;
    return roster
}