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

import logs from "./routes/captain";
// Routes
app.use("/captain", logs);

//Seed database
import Log from "./controllers/logs";
import { ILog } from "./models/logs";
import seed from "./models/seed";
//@ts-ignore
app.get("/seed", async (req, res) => {
  try {
    const data: ILog[] = await Log.getLogs();
    data.length === 0 ? seed() : undefined;
    res.status(200).send("seeded");
  } catch (err) {}
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
