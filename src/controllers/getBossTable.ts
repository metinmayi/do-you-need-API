import { pool } from "../config/database/database";

// Type the bossName to a bossName Type
export const getBossTable = async (bossName: string) => {
  const query = `SELECT * FROM ${bossName}`;
  const result = await pool.execute(query);
  return result;
};
