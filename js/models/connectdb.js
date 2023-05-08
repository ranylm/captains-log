"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectMongo = async () => {
    (0, mongoose_1.connect)(process.env.MONGO_URI);
    mongoose_1.connection.once("open", () => {
        console.log("connected to mongodb");
    });
};
exports.default = connectMongo;
