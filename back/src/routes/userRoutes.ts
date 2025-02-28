import { Router } from "express";
import {
  createUsers,
  deleteUsers,
  getUsers,
  updateUsers,
  getUserById,
} from "../controller/userController";
import { validateUser } from "../middlewares/validCredentials";

export let userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", validateUser, getUserById);
userRouter.post("/", createUsers);
userRouter.put("/", updateUsers);
userRouter.delete("/", deleteUsers);
