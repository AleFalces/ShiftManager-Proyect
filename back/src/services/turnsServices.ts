import { EStatus, Iturn } from "../interfaces/ITurns";
import { ITurnDto } from "../Dto/TurnsDto";
import { Turn } from "../entities/Turns";
import { TurnSource, UserSource } from "../config/data-source";

export let getAllTurnServices = async (): Promise<Turn[]> => {
  const allTurns: Turn[] | undefined = await TurnSource.find({
    relations: {
      user: true,
    },
  });
  return allTurns;
};

export let getTurnByIServices = async (id: string): Promise<Turn | null> => {
  let turnById = await TurnSource.findOneBy({ id });
  return turnById;
};

export let createTurnServices = async (
  turnData: ITurnDto
): Promise<Turn | null> => {
  const id: string = turnData.userId;
  const userExist = await UserSource.findOneBy({ id });
  if (userExist) {
    let newTurn: Turn = TurnSource.create({
      date: new Date(),
      time: turnData.time,
      userId: userExist?.id,
      status: EStatus.AVAILABLE,
    });
    TurnSource.save(newTurn);
    return newTurn;
  }
  return null;
};

export let updateTurnServices = async () => {
  return "updated turn";
};

export let deleteTurnServices = async () => {
  return "deleted turn";
};
