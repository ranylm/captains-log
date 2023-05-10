"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = __importDefault(require("../models/comment"));
// type tComments = IComment[];
const createComment = async (comment) => {
    const data = await comment_1.default.create(comment);
    return data;
};
exports.default = { createComment };
