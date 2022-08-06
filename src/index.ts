import express from "express";
import dotenv from "dotenv";
import PlayerRouter from "./routes/PlayerRouter";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

// Routes
app.use("/player", PlayerRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
