import express from "express";
const router = express.Router();
import Log from "../api/logs";

// List all logs
router.get("/", async (req, res) => {
  try {
    const data = await Log.getLogs();
    console.log(data);
    res.render("captain/Index", { data: data });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Create log form
router.get("/new", async (req, res) => {
  try {
    const data = await Log.getLogs();
    res.render("captain/New", { data: data });
  } catch (err) {
    res.status(400).send(err);
  }
});

// POST new log
router.post("/", async (req, res) => {
  try {
    const shipIsBroken = req.body.shipIsBroken ? true : false;
    const data = await Log.createLog({
      ...req.body,
      shipIsBroken: shipIsBroken,
    });
    res.redirect("./");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit log
router.get("/edit/:id", async (req, res) => {
  try {
    const data = await Log.getLogById(req.params.id);
    res.render("captain/Edit", { data: data });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit
router.put("/", async (req, res) => {
  try {
    const shipIsBroken = req.body.shipIsBroken ? true : false;
    const data = await Log.updateLog(req.body.id, {
      title: req.body.title,
      entry: req.body.entry,
      shipIsBroken: shipIsBroken,
    });
    res.redirect("./");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Display log info
router.get("/:id", async (req, res) => {
  try {
    const data = await Log.getLogById(req.body);
    res.render("captain/Show", { data: data });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete log
router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Log.deleteLog(req.params.id);
    res.redirect("./");
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
