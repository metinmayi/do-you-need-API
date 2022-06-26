import express from "express";
import dotenv from "dotenv";
import PlayerRouter from "./routes/PlayerRouter";
import cors from "cors";
import { connection } from "./database";
dotenv.config();

connection.query("SELECT player_name FROM vigilant_guardian", (err, res) => {
  if (err) return console.log(err);
  console.log(res);
});

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

// Routes
app.use("/player", PlayerRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
