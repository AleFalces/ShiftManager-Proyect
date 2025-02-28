import { Router } from "express";
import {
  createTurn,
  getAllTurn,
  deleteTurn,
  updateTurn,
} from "../controller/turnsController";
import { validateUser } from "../middlewares/validUser";

export const turnRouter = Router();

turnRouter.get("/", getAllTurn);
turnRouter.post("/", validateUser, createTurn);
turnRouter.put("/", updateTurn);
turnRouter.delete("/", deleteTurn);
