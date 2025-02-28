import { Router } from "express";
import {
  createUsers,
  deleteUsers,
  getUsers,
  updateUsers,
} from "../controller/userController";

export let userRouter = Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUsers);
userRouter.put("/", updateUsers);
userRouter.delete("/", deleteUsers);
