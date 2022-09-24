import express from "express";
import dotenv from "dotenv";
import DoYouNeedRouter from "./routes/DoYouNeedRouter";
import AuthenticationRouter from "./routes/AuthenticationRouter";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import BlizzardRouter from "./routes/BlizzardRouter";
import { isAuthenticated } from "./middleware/isAuthenticated";
import "./mongoose/mongoose";

const store = MongoStore.create({
  mongoUrl: process.env.MONGOOSE_URL,
  collectionName: "sessions",
});
dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "",
    resave: false,
    saveUninitialized: true,
    store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/doYouNeed", DoYouNeedRouter);
app.use("/authentication", AuthenticationRouter);
app.use("/blizzard", isAuthenticated, BlizzardRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
