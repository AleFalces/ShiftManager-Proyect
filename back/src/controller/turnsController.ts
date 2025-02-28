import { Request, Response } from "express";
import {
  getAllTurnServices,
  createTurnServices,
  updateTurnServices,
  deleteTurnServices,
} from "../services/turnsServices";
import { Iturn } from "../interfaces/ITurns";

export let getAllTurn = async (req: Request, res: Response) => {
  let turn: Iturn[] = await getAllTurnServices();
  res.status(200).send(turn);
};
export let createTurn = async (req: Request, res: Response) => {
  let createdTurn: string = await createTurnServices();
  res.status(200).send(createdTurn);
};

export let updateTurn = async (req: Request, res: Response) => {
  let TurnUpdated: string = await updateTurnServices();
  res.status(200).send(TurnUpdated);
};

export let deleteTurn = async (req: Request, res: Response) => {
  let deleted: string = await deleteTurnServices();
  res.status(200).send(deleted);
};
