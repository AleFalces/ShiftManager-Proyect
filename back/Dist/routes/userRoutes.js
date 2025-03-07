"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const validCredentials_1 = require("../middlewares/validCredentials");
const validationCreateUser_1 = require("../middlewares/validationCreateUser");
const usernameExist_1 = require("../middlewares/usernameExist");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/", userController_1.default.getUsers);
exports.userRouter.get("/:id", userController_1.default.getUserById);
exports.userRouter.post("/register", validationCreateUser_1.validateCreateUser, usernameExist_1.usernameExist, userController_1.default.createUsers);
exports.userRouter.post("/login", userController_1.default.loginUser);
exports.userRouter.put("/", validCredentials_1.validateCredentials, userController_1.default.updateUsers);
exports.userRouter.delete("/delete/:id", userController_1.default.deleteUsers);
