import { Iturn } from "../interfaces/ITurns";

export let turns: Iturn[] = [];

export let getAllTurnServices = async (): Promise<Iturn[]> => {
  return turns;
};
export let createTurnServices = async () => {
  return "created turn";
};

export let updateTurnServices = async () => {
  return "updated turn";
};

export let deleteTurnServices = async () => {
  return "deleted turn";
};
