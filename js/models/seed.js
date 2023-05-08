"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logs_1 = __importDefault(require("../models/logs"));
async function seed() {
    try {
        await logs_1.default.create({
            title: "captain",
            entry: "Lost",
            shipisBroken: false,
        });
        await logs_1.default.create({
            title: "captain",
            entry: "Lost",
            shipisBroken: false,
        });
        await logs_1.default.create({
            title: "captain",
            entry: "Engines Shut down",
            shipisBroken: true,
        });
        await logs_1.default.create({
            title: "captain",
            entry: "deadend",
            shipisBroken: true,
        });
    }
    catch (err) { }
}
exports.default = seed;
