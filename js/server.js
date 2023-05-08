"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectdb_1 = __importDefault(require("./models/connectdb"));
(0, connectdb_1.default)();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
//@ts-ignore
const method_override_1 = __importDefault(require("method-override"));
//@ts-ignore
const jsx_view_engine_1 = __importDefault(require("jsx-view-engine"));
const engine = jsx_view_engine_1.default.createEngine();
app.engine("jsx", engine);
app.set("view engine", "jsx");
app.set("views", "./views");
// Middleware
app.use(express_1.default.urlencoded({ extended: false })); // This enables the req.body
app.use((0, method_override_1.default)("_method"));
app.use(express_1.default.static("public"));
//@ts-ignore
app.use((req, res, next) => {
    console.log("Middleware running...");
    next();
});
const log_1 = __importDefault(require("./controllers/log"));
// Routes
app.use("/log", log_1.default);
//Seed database
const logs_1 = __importDefault(require("./api/logs"));
const seed_1 = __importDefault(require("./models/seed"));
//@ts-ignore
app.get("/seed", async (req, res) => {
    try {
        const data = await logs_1.default.getLogs();
        data.length === 0 ? (0, seed_1.default)() : undefined;
        res.status(200).send("seeded");
    }
    catch (err) { }
});
//Catch all route. If the uses try to reach a route that doesn't match the ones above it will catch them and redirect to the Index page
app.get("/*", (req, res) => {
    res.status(404).send(`
    <div>
      404 this page doesn't exist! <br />
      <a href="/fruits">Fruit</a> <br />
      <a href="/vegetables">Vegetables</a>
    </div
  `);
});
// Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
