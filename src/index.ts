import express, { Request, Response } from "express";
import dotenv from "dotenv";
import DoYouNeedRouter from "./routes/DoYouNeedRouter";
import AuthenticationRouter from "./routes/AuthenticationRouter";
import cors from "cors";
import session from "express-session";
import MySQLSessionStore from "express-mysql-session";
import passport from "passport";
import BlizzardRouter from "./routes/BlizzardRouter";
import { isAuthenticated } from "./middleware/isAuthenticated";
import { DATABASE_OPTIONS, pool } from "./database/database";

dotenv.config();
const store = new (MySQLSessionStore as any)(DATABASE_OPTIONS, pool);
const app = express();

app.set("trust proxy", 1);

app.get("/", (req: Request, res: Response) => {});

app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => callback(null, true),
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
      sameSite: process.env.ENVIRONMENT === "dev" ? "lax" : "strict",
      secure: process.env.ENVIRONMENT === "dev" ? false : false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/doyouneed", DoYouNeedRouter);
app.use("/authentication", AuthenticationRouter);
app.use("/blizzard", isAuthenticated, BlizzardRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
