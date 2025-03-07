"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.turnRouter = void 0;
const express_1 = require("express");
const turnsController_1 = __importDefault(require("../controller/turnsController"));
const validUser_1 = require("../middlewares/validUser");
const validCredentials_1 = require("../middlewares/validCredentials");
exports.turnRouter = (0, express_1.Router)();
exports.turnRouter.get("/", turnsController_1.default.getAllTurn);
exports.turnRouter.get("/:id", validCredentials_1.validateCredentials, turnsController_1.default.getTurnById);
exports.turnRouter.post("/schedule", validUser_1.validateUser, validCredentials_1.validateCredentials, turnsController_1.default.createTurn);
exports.turnRouter.put("/reserve/", turnsController_1.default.reserveTurn);
exports.turnRouter.put("/cancel/", turnsController_1.default.updateTurn);
exports.turnRouter.delete("/cancel/:id", turnsController_1.default.deleteTurn);
