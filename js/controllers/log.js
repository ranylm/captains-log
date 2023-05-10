"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const logs_1 = __importDefault(require("../api/logs"));
const comment_1 = __importDefault(require("../api/comment"));
// import comment from "./api/comment";
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
// Log creation interface
router.get("/new", async (req, res) => {
    try {
        res.render("captain/New");
    }
    catch (err) {
        res.status(400).send(err);
    }
});
// Display log info
router.get("/:id", async (req, res) => {
    try {
        const data = await logs_1.default.getLogById(req.params.id);
        res.render("captain/Show", { data: data });
    }
    catch (err) {
        res.status(400).send(err);
    }
});
// Edit log Interface
router.get("/edit/:id", async (req, res) => {
    try {
        const data = await logs_1.default.getLogById(req.params.id);
        res.render("captain/Edit", { data: data });
    }
    catch (err) {
        res.status(400).send(err);
    }
});
// POST new log
router.post("/", async (req, res) => {
    try {
        const shipIsBroken = req.body.shipIsBroken ? true : false;
        const data = await logs_1.default.createLog({
            ...req.body,
            shipIsBroken: shipIsBroken,
        });
        res.redirect("./");
    }
    catch (err) {
        res.status(400).send(err);
    }
});
// PUT Edit log
router.put("/", async (req, res) => {
    try {
        const shipIsBroken = req.body.shipIsBroken ? true : false;
        const data = await logs_1.default.updateLog(req.body.id, {
            title: req.body.title,
            entry: req.body.entry,
            shipIsBroken: shipIsBroken,
            comments: [],
        });
        res.redirect(`./${req.body.id}`);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
// DELETE log
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
router.post("/:id/comment", async (req, res) => {
    try {
        console.log("new comment", req.params.id);
        const comment = await comment_1.default.createComment(req.body);
        // const log = await Log.getLogById(req.params.id)
        const data = await logs_1.default.updateLog(req.params.id, {
            $push: { comments: comment },
        });
        res.redirect("./");
    }
    catch (err) {
        res.status(400).send(err);
    }
});
exports.default = router;
