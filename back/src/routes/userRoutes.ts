import { Router } from "express";
import userController from "../controller/userController";

import { validateCredentials } from "../middlewares/validCredentials";

export let userRouter = Router();

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", validateCredentials, userController.getUserById);
userRouter.post("/", userController.createUsers);
userRouter.put("/", userController.updateUsers);
userRouter.delete("/", userController.deleteUsers);
