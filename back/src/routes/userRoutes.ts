import { Router } from "express";
import { createUsers, getUsers } from "../controller/usercontroller";

export let userRouter = Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUsers);
userRouter.put("/");
userRouter.delete("/");
