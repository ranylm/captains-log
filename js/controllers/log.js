"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const logs_1 = __importDefault(require("../api/logs"));
// List all logs
router.get("/", async (req, res) => {
    try {
        const data = await logs_1.default.getLogs();
        console.log(data);
        res.render("captain/Index", { data: data });
    }
    catch (err) {
        res.status(400).send(err);
    }
});
// Create log form
router.get("/new", async (req, res) => {
    try {
        const data = logs_1.default.getLogs();
        res.render("captain/New", { data: data });
    }
    catch (err) {
        res.status(400).send(err);
    }
});
// POST new log
router.post("/", async (req, res) => {
    try {
        const shipIsBroken = req.body.shipIsBroken ? true : false;
        const data = logs_1.default.createLog({ ...req.body, shipIsBroken: shipIsBroken });
        res.redirect("./");
    }
    catch (err) {
        res.status(400).send(err);
    }
});
//
router.get("/edit/:id", async (req, res) => {
    try {
        const data = logs_1.default.getLogs();
        res.render("captain/Edit", { data: +req.params.id });
    }
    catch (err) {
        res.status(400).send(err);
    }
});
router.put("/", async (req, res) => {
    try {
        const data = logs_1.default.getLogs();
        res.render("captain/New", { data: data });
    }
    catch (err) {
        res.status(400).send(err);
    }
});
// Display log info
router.get("/:id", async (req, res) => {
    try {
        const data = await logs_1.default.getLogById(req.body);
        res.render("captain/Show", { data: data });
    }
    catch (err) {
        res.status(400).send(err);
    }
});
// Delete log
router.delete("/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        const data = await logs_1.default.deleteLog(req.params.id);
        res.redirect("./");
    }
    catch (err) {
        res.status(400).send(err);
    }
});
exports.default = router;
