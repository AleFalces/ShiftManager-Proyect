import { NextFunction, Request, Response } from "express";
import {
  getAllTurnServices,
  createTurnServices,
  updateTurnServices,
  deleteTurnServices,
  getTurnByIServices,
  reserveTurnServices,
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
  res.status(200).json(turnById);
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
  const { id, turnId } = req.body;
  let TurnUpdated = await updateTurnServices(id, turnId);
  res.status(200).send(TurnUpdated);
};

let reserveTurn = async (req: Request, res: Response) => {
  const { id, turnId } = req.body;
  let turnReserve = await reserveTurnServices(id, turnId);
  res.status(200).send(turnReserve);
};

let deleteTurn = async (req: Request, res: Response) => {
  let { id } = req.params;
  let deleted: string = await deleteTurnServices(id);
  res.status(200).send(deleted);
};

export default {
  getAllTurn: catchErros(getAllTurn),
  createTurn: catchErros(createTurn),
  getTurnById: catchErros(getTurnById),
  updateTurn: catchErros(updateTurn),
  deleteTurn: catchErros(deleteTurn),
  reserveTurn: catchErros(reserveTurn),
};
