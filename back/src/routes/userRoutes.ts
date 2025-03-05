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
userRouter.post("/loging");
userRouter.put("/", validateCredentials, userController.updateUsers);
userRouter.delete("/deleted/:id", userController.deleteUsers);
