import { Router } from "express";
import {
  createUsers,
  deleteUsers,
  getUsers,
  updateUsers,
} from "../controller/usercontroller";

export let userRouter = Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUsers);
userRouter.put("/", updateUsers);
userRouter.delete("/", deleteUsers);
