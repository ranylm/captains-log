"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const logs_1 = __importDefault(require("../models/logs"));
const getLogs = async () => {
    const data = await logs_1.default.find({});
    return data;
};
const getLogById = async (id) => {
    const data = await logs_1.default.findById(id);
    return data;
};
const createLog = async (log) => {
    const data = await logs_1.default.create(log);
    return data;
};
const updateLog = async (id, log) => {
    const data = await logs_1.default.findByIdAndUpdate(log);
    return data;
};
const deleteLog = async (id) => {
    if (id === undefined)
        throw new mongoose_1.Error("Deleting Undefined");
    const data = await logs_1.default.findByIdAndDelete(id);
    return data;
};
exports.default = { getLogs, getLogById, createLog, updateLog, deleteLog };
