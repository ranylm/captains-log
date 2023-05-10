import express from "express";
const router = express.Router();
import Log from "../api/foodlogs";

// List all logs
router.get("/", async (req, res) => {
  try {
    const data = await Log.getLogs();
    console.log(data);
    res.render("foodlog/Index", { data: data });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Log creation interface
router.get("/new", async (req, res) => {
  try {
    res.render("foodlog/New");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Display log info
router.get("/:id", async (req, res) => {
  try {
    const data = await Log.getLogById(req.params.id);
    res.render("foodlog/Show", { data: data });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit log Interface
router.get("/edit/:id", async (req, res) => {
  try {
    const data = await Log.getLogById(req.params.id);
    res.render("foodlog/Edit", { data: data });
  } catch (err) {
    res.status(400).send(err);
  }
});

// POST new log
router.post("/", async (req, res) => {
  try {
    const data = await Log.createLog({
      ...req.body,
    });
    res.redirect("/foodlog");
  } catch (err) {
    res.status(400).send(err);
  }
});

// PUT Edit log
router.put("/", async (req, res) => {
  try {
    const data = await Log.updateLog(req.body.id, {
      title: req.body.title,
      entry: req.body.entry,
      rations: req.body.rations ?? 0,
    });
    res.redirect(`/foodlog/${req.body.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE log
router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Log.deleteLog(req.params.id);
    res.redirect("/foodlog");
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
