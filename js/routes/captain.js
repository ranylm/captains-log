"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const logs_1 = __importDefault(require("../controllers/logs"));
router.get("/", async (req, res) => {
    const data = await logs_1.default.getLogs();
    console.log(data);
    res.render("captain/Index", { data: data });
});
router.get("/new", async (req, res) => {
    const data = logs_1.default.getLogs();
    res.render("captain/New", { data: data });
});
router.post("/create", async (req, res) => {
    const data = logs_1.default.createLog(req.body);
    res.render("captain/New", { data: data });
});
router.get("/:id", async (req, res) => {
    const data = await logs_1.default.getLogById(req.body);
    res.render("captain/Show", { data: data });
});
exports.default = router;
