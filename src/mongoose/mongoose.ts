import mongoose from "mongoose";
const URL = process.env.MONGOOSE_URL || "";

mongoose
  .connect(URL)
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));
