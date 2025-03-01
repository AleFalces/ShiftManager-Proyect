import { Router } from "express";
import userController from "../controller/userController";

import { validateCredentials } from "../middlewares/validCredentials";
import { validateCreateUser } from "../middlewares/validationCreateUser";
import { usernameExist } from "../middlewares/usernameExist";

export let userRouter = Router();

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", validateCredentials, userController.getUserById);
userRouter.post(
  "/",
  validateCreateUser,
  usernameExist,
  userController.createUsers
);
userRouter.put("/", validateCredentials, userController.updateUsers);
userRouter.delete("/", validateCredentials, userController.deleteUsers);
