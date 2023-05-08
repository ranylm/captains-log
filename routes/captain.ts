import express from "express";
const router = express.Router();
import Log from "../controllers/logs";

router.get("/", async (req, res) => {
  const data = await Log.getLogs();
  console.log(data);
  res.render("captain/Index", { data: data });
});

router.get("/new", async (req, res) => {
  const data = Log.getLogs();
  res.render("captain/New", { data: data });
});

router.post("/create", async (req, res) => {
  const data = Log.createLog(req.body);
  res.render("captain/New", { data: data });
});

router.get("/:id", async (req, res) => {
  const data = await Log.getLogById(req.body);
  res.render("captain/Show", { data: data });
});

export default router;
