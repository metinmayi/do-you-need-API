"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const DoYouNeedRouter_1 = __importDefault(require("./routes/DoYouNeedRouter"));
const AuthenticationRouter_1 = __importDefault(require("./routes/AuthenticationRouter"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const express_mysql_session_1 = __importDefault(require("express-mysql-session"));
const passport_1 = __importDefault(require("passport"));
const BlizzardRouter_1 = __importDefault(require("./routes/BlizzardRouter"));
const isAuthenticated_1 = require("./middleware/isAuthenticated");
const database_1 = require("./database/database");
dotenv_1.default.config();
const store = new express_mysql_session_1.default(database_1.DATABASE_OPTIONS, database_1.pool);
const app = (0, express_1.default)();
app.set("trust proxy", 1);
app.get("/", (req, res) => {
    console.log("ping");
    res.send("Tjena Dennis");
});
app.use((0, cors_1.default)({
    credentials: true,
    origin: (origin, callback) => callback(null, true),
}));
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET || "",
    resave: false,
    saveUninitialized: true,
    store,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: process.env.ENVIRONMENT === "dev" ? "lax" : "strict",
        secure: process.env.ENVIRONMENT === "dev" ? false : false,
    },
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// Routes
app.use("/doyouneed", DoYouNeedRouter_1.default);
app.use("/authentication", AuthenticationRouter_1.default);
app.use("/blizzard", isAuthenticated_1.isAuthenticated, BlizzardRouter_1.default);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
