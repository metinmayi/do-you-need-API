import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.MONGOOSE_URL || "";
mongoose
  .connect(URL)
  .then(() => console.log("connected"))
  .catch((error) => console.log({ error }));
