import { Router } from "express";
import userController from "../controller/userController";
import { validateCredentials } from "../middlewares/validCredentials";
import { validateCreateUser } from "../middlewares/validationCreateUser";
import { usernameExist } from "../middlewares/usernameExist";

export let userRouter = Router();

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post(
  "/register",
  validateCreateUser,
  usernameExist,
  userController.createUsers
);
userRouter.post("/login", userController.loginUser);
userRouter.put("/update", validateCredentials, userController.updateUsers);
userRouter.delete("/delete/:id", userController.deleteUsers);
