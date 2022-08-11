import express from "express";
import dotenv from "dotenv";
import PlayerRouter from "./routes/PlayerRouter";
import AuthenticationRouter from "./routes/AuthenticationRouter";
import cors from "cors";
import session from "express-session";
import MySQLSessionStore from "express-mysql-session";
import { DATABASE_OPTIONS, pool } from "./config/database/database";
import passport from "passport";
import "./config/passport";

dotenv.config();
const store = new (MySQLSessionStore as any)(DATABASE_OPTIONS, pool);
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
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 24 * 24,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT;

// Routes
app.use("/player", PlayerRouter);
app.use("/authentication", AuthenticationRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
