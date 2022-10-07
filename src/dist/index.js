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
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const passport_1 = __importDefault(require("passport"));
const BlizzardRouter_1 = __importDefault(require("./routes/BlizzardRouter"));
const isAuthenticated_1 = require("./middleware/isAuthenticated");
require("./mongoose/mongoose");
dotenv_1.default.config();
const store = connect_mongo_1.default.create({
    mongoUrl: process.env.MONGOOSE_URL,
    collectionName: "sessions",
});
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.sendStatus(200);
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
    },
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// Routes
app.use("/doyouneed", DoYouNeedRouter_1.default);
app.use("/authentication", AuthenticationRouter_1.default);
app.use("/blizzard", isAuthenticated_1.isAuthenticated, BlizzardRouter_1.default);
console.log("GOOD TO GO");
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
