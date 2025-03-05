import { EStatus, ETime, EWeekday } from "../interfaces/ITurns";
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

export let createTurnServices = async (turnData: ITurnDto): Promise<Turn> => {
  const { userId, day, time } = turnData;
  const userExist = await UserSource.findOneBy({ id: userId });
  const weekday = Object.values(EWeekday).find((d) => d === day);
  const scheduleTime = Object.values(ETime).find((t) => t === time);
  console.log(scheduleTime);
  console.log(weekday);
  if (userExist === null) {
    throw Error("user dont exist");
  }
  if (scheduleTime === undefined) {
    throw Error("inglese un horario dispoible");
  }
  if (weekday === undefined) {
    throw Error("el dia elegido es incorrecto");
  } else {
    let newTurn: Turn = TurnSource.create({
      day: weekday,
      time: scheduleTime,
      userId: userExist.id,
      status: EStatus.AVAILABLE,
    });
    TurnSource.save(newTurn);
    return newTurn;
  }
};

export let updateTurnServices = async () => {
  return "updated turn";
};

export let deleteTurnServices = async () => {
  return "deleted turn";
};
