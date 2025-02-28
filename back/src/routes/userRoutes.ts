import { Router } from "express";
import {
  createUsers,
  deleteUsers,
  getUsers,
  updateUsers,
  getUserById,
} from "../controller/userController";
import { validateCredentials } from "../middlewares/validCredentials";

export let userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", validateCredentials, getUserById);
userRouter.post("/", createUsers);
userRouter.put("/", updateUsers);
userRouter.delete("/", deleteUsers);
