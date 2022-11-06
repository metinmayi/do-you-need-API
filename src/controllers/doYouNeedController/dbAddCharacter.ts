import { pool } from "../../database/database";
import { ICharacter } from "../../models/doYouNeed/ICharacter";

/**
 * Adds a new character to the character table in the DB.
 * @param {ICharacter} character The character
 */
export async function dbAddCharacter(character: ICharacter) {
  const { selected, name, charClass, role, blizzardId } = character;
  const SQL =
    "INSERT INTO characters(selected, name, class, role, blizzard_id) VALUES(?,?,?,?,?) ON DUPLICATE KEY UPDATE name=name";
  await pool.execute(SQL, [selected, name, charClass, role, blizzardId]);
}
