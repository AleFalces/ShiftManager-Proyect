import { Router } from "express";
import {
  createTurn,
  getTurn,
  deleteTurn,
  updateTurn,
} from "../controller/turnsController";

export const turnRouter = Router();

turnRouter.get("/", getTurn);
turnRouter.post("/", createTurn);
turnRouter.put("/", updateTurn);
turnRouter.delete("/", deleteTurn);
