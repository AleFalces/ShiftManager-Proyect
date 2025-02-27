import { Request, Response } from "express";
import {
  getTurnServices,
  createTurnServices,
  updateTurnServices,
  deleteTurnServices,
} from "../services/turnsServices";

export let getTurn = async (req: Request, res: Response) => {
  let turn: string = await getTurnServices();
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
