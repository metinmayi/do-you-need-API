/**
 * Basic authentication has to haave the credentials encrypted in base64.
 * This function returns the encrypted and formatted value
 */
 export const getBasicAuth = () => {
    const clientId = process.env.BLIZZARD_CLIENT_ID || "";
    const clientSecret = process.env.BLIZZARD_CLIENT_SECRET || "";
    
    const buffer = Buffer.from(`${clientId}:${clientSecret}`);
    const encrypted = buffer.toString("base64");
    return `Basic ${encrypted}`;
}