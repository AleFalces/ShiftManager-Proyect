import { Router } from "express";
import turnsController from "../controller/turnsController";
import { validateUser } from "../middlewares/validUser";
import { validateCredentials } from "../middlewares/validCredentials";

export const turnRouter = Router();

turnRouter.get("/", turnsController.getAllTurn);
turnRouter.get("/:id", validateCredentials, turnsController.getTurnById);
turnRouter.post(
  "/schedule",
  validateUser,
  validateCredentials,
  turnsController.createTurn
);
turnRouter.put("/reserve/", turnsController.reserveTurn);
turnRouter.put("/cancel/", turnsController.updateTurn);
turnRouter.delete("/cancel/:id", turnsController.deleteTurn);
