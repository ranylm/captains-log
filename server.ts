import dotenv from "dotenv";
dotenv.config();

import connectMongo from "./models/connectdb";
connectMongo();

import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

//@ts-ignore
import methodOverride from "method-override";
//@ts-ignore
import reactViewsEngine from "jsx-view-engine";
const engine = reactViewsEngine.createEngine();
app.engine("jsx", engine);
app.set("view engine", "jsx");
app.set("views", "./views");

// Middleware
app.use(express.urlencoded({ extended: false })); // This enables the req.body
app.use(methodOverride("_method"));
app.use(express.static("public"));

//@ts-ignore
app.use((req, res, next) => {
  console.log("Middleware running...");
  next();
});

// Routes
import logs from "./controllers/log";
import foodlogs from "./controllers/foodlog";
app.use("/log", logs);
app.use("/foodlog", foodlogs);

//Seed database
import Log from "./api/logs";
import { ILog } from "./models/logs";
import FoodLog from "./api/foodlogs";
import { IFoodLog } from "./models/foodlogs";
import { seed, seed2 } from "./models/seed";
//@ts-ignore
app.get("/seed", async (req, res) => {
  try {
    const data: ILog[] = await Log.getLogs();
    data.length === 0 ? seed() : undefined;
    const data2: IFoodLog[] = await FoodLog.getLogs();
    data2.length === 0 ? seed2() : undefined;
    res.status(200).send("seeded");
  } catch (err) {}
});

//Catch all route. If the uses try to reach a route that doesn't match the ones above it will catch them and redirect to the Index page
app.get("/*", (req, res) => {
  res.status(404).send(`
    <div>
      404 this page doesn't exist! <br />
      <a href="/log">Captains Logs</a> <br />
      <a href="/foodlog">Food Logs</a>
    </div
  `);
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
