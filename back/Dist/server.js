"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const morgan = require("morgan");
const server = (0, express_1.default)();
server.use(morgan("dev"));
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use(routes_1.default);
server.use((error, req, res, next) => {
    if (error instanceof SyntaxError && "body" in error) {
        res.status(400).json({ message: "Invalid JSON format" });
    }
    else {
        res
            .status(error.statusCode || 500)
            .json(error.message || "Internal server error");
    }
});
exports.default = server;
