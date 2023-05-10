"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed2 = exports.seed = void 0;
const logs_1 = __importDefault(require("../models/logs"));
const foodlogs_1 = __importDefault(require("../models/foodlogs"));
async function seed() {
    try {
        await logs_1.default.create({
            title: "Day 1",
            entry: "Lost",
            shipIsBroken: false,
        });
        await logs_1.default.create({
            title: "Day 2",
            entry: "Lost",
            shipIsBroken: false,
        });
        await logs_1.default.create({
            title: "Day 5",
            entry: "Engines Shut down",
            shipIsBroken: true,
        });
        await logs_1.default.create({
            title: "Day 123",
            entry: "deadend",
            shipIsBroken: true,
        });
    }
    catch (err) { }
}
exports.seed = seed;
async function seed2() {
    try {
        await foodlogs_1.default.create({
            title: "Day 1",
            entry: "Not much food",
            rations: 4,
        });
        await foodlogs_1.default.create({
            title: "Day 3",
            entry: "supplies dwindlling",
            rations: 2,
        });
        await foodlogs_1.default.create({
            title: "Day 7",
            entry: "No more food",
            rations: 0,
        });
        await foodlogs_1.default.create({
            title: "Day 21",
            entry: "I found some more...",
            rations: 2,
        });
    }
    catch (err) { }
}
exports.seed2 = seed2;
