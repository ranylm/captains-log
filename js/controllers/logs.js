"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logs_1 = __importDefault(require("../models/logs"));
const getLogs = async () => {
    try {
        const data = await logs_1.default.find({});
        return data;
    }
    catch (err) {
        return err;
    }
};
const getLogById = async (id) => {
    try {
        const data = await logs_1.default.findById(id);
        return data;
    }
    catch (err) {
        return err;
    }
};
const createLog = async (log) => {
    try {
        const data = await logs_1.default.create(log);
        return data;
    }
    catch (err) {
        return err;
    }
};
const updateLog = async (id, log) => {
    try {
        const data = await logs_1.default.findByIdAndUpdate(log);
        return data;
    }
    catch (err) {
        return err;
    }
};
const deleteLog = async (id) => {
    try {
        const data = await logs_1.default.findByIdAndDelete(id);
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.default = { getLogs, getLogById, createLog, updateLog, deleteLog };
