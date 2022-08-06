import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

/**
 * Queries the database
 */
export const queryDatabase = async (query: string, args: string[] = []) => {
  try {
    const db = await mysql.createConnection({
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });
    return await db.execute(query, args);
  } catch (error) {
    console.log(error);
  }
};

// export { connection };
