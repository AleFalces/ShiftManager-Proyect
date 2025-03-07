"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = require("./userRoutes");
const TurnsRoutes_1 = require("./TurnsRoutes");
const router = (0, express_1.Router)();
router.use("/users", userRoutes_1.userRouter);
router.use("/turns", TurnsRoutes_1.turnRouter);
exports.default = router;
