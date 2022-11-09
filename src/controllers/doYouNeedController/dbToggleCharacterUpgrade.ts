import { pool } from "../../database/database";

export async function dbToggleCharacterUpgrade(
  characterId: string,
  bossName: string
) {
  const SQL = `UPDATE boss_upgrades
    SET selected = NOT selected
    WHERE boss_name=?
    AND character_id=?;`;

  await pool.execute(SQL, [bossName, characterId]);
}
