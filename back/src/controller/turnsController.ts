import { NextFunction, Request, Response } from "express";
import {
  getAllTurnServices,
  createTurnServices,
  updateTurnServices,
  deleteTurnServices,
  getTurnByIServices,
} from "../services/turnsServices";
import catchErros from "../utils/utils";
import { Turn } from "../entities/Turns";

let getAllTurn = async (req: Request, res: Response) => {
  let turn: Turn[] = await getAllTurnServices();
  res.status(200).send(turn);
};
let getTurnById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  let turnById = await getTurnByIServices(id);
  if (turnById === null || turnById === undefined) {
    next({ message: "turn not Found", statusCode: 400 });
  } else {
    res.status(200).json(turnById);
  }
};
let createTurn = async (req: Request, res: Response) => {
  let { userId, day, time } = req.body;
  let createdTurn: Turn = await createTurnServices({
    userId,
    day,
    time,
  });
  res.status(200).send(createdTurn);
};

let updateTurn = async (req: Request, res: Response) => {
  let TurnUpdated: string = await updateTurnServices();
  res.status(200).send(TurnUpdated);
};

let deleteTurn = async (req: Request, res: Response) => {
  let deleted: string = await deleteTurnServices();
  res.status(200).send(deleted);
};

export default {
  getAllTurn: catchErros(getAllTurn),
  createTurn: catchErros(createTurn),
  getTurnById: catchErros(getTurnById),
  updateTurn: catchErros(updateTurn),
  deleteTurn: catchErros(deleteTurn),
};
