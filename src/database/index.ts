import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

/**
 * Setup Database
 */
const connection = mysql.createConnection({
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

/**
 * Database connection
 */
connection.connect((error) => {
  if (error) {
    return console.log(error);
  }
  console.log("Connected");
});

export { connection };
