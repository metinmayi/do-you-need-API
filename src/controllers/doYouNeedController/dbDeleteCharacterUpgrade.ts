import { pool } from "../../database/database";

export async function dbDeleteCharacterUpgrade(id: string) {
  const SQL = "DELETE FROM boss_upgrades WHERE character_id=?";
  const result = await pool.execute(SQL, [id]);
}
