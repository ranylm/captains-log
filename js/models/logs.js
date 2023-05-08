"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const logSchema = new mongoose_1.Schema({
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Log", logSchema);
