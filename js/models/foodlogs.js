"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const foodLogSchema = new mongoose_1.Schema({
    title: String,
    entry: String,
    rations: { type: Number, default: 0 },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("FoodLog", foodLogSchema);
