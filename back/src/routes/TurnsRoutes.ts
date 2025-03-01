import { Router } from "express";
import turnsController from "../controller/turnsController";
import { validateUser } from "../middlewares/validUser";
import { validateCredentials } from "../middlewares/validCredentials";

export const turnRouter = Router();

turnRouter.get("/", turnsController.getAllTurn);
turnRouter.get("/:id", validateCredentials, turnsController.getTurnById);
turnRouter.post(
  "/",
  validateUser,
  validateCredentials,
  turnsController.createTurn
);
turnRouter.put(
  "/",
  validateUser,
  validateCredentials,
  turnsController.updateTurn
);
turnRouter.delete(
  "/",
  validateUser,
  validateCredentials,
  turnsController.deleteTurn
);
