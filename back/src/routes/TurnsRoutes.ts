import { Router } from "express";
import turnsController from "../controller/turnsController";
import { validateUser } from "../middlewares/validUser";

export const turnRouter = Router();

turnRouter.get("/", turnsController.getAllTurn);
turnRouter.get("/:id", validateUser, turnsController.getTurnById);
turnRouter.post("/", validateUser, turnsController.createTurn);
turnRouter.put("/", turnsController.updateTurn);
turnRouter.delete("/", turnsController.deleteTurn);
