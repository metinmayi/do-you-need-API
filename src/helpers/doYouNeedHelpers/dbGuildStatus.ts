import { pool } from "../../database/database";

/**
 * Gets the guild from the database.
 * @param {string} id The guild's blizzard ID.
 * @returns
 */
export const dbGetGuildByBlizzardId = async (id: string) => {
  const SQL =
    "SELECT blizzard_id, name, realm, license, faction FROM guilds WHERE blizzard_id=?";
  const response: any = await pool.execute(SQL, [id]);
  return response[0];
};
