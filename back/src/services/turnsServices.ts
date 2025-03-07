import { ETurnStatus, ETime, EWeekday } from "../interfaces/ITurns";
import { ITurnDto } from "../Dto/TurnsDto";
import { Turn } from "../entities/Turns";
import { TurnSource } from "../config/data-source";
import userRepository from "../repositories/userRepository";

export let getAllTurnServices = async (): Promise<Turn[]> => {
  const allTurns: Turn[] | undefined = await TurnSource.find({
    relations: {
      user: true,
    },
  });
  return allTurns;
};

export let getTurnByIServices = async (id: string): Promise<Turn | null> => {
  let turnById = await TurnSource.findOneBy({ turnId: id });
  if (turnById === null) {
    throw Error("Turn not found");
  }
  return turnById;
};

export let createTurnServices = async (turnData: ITurnDto): Promise<Turn> => {
  const { userId, day, time } = turnData;
  const userExist = await userRepository.findById(userId);
  const weekday = Object.values(EWeekday).find((d) => d === day);
  const scheduleTime = Object.values(ETime).find((t) => t === time);
  if (userExist === null) {
    throw Error("user dont exist");
  }
  if (userExist.type !== "admin") {
    throw Error("This user cannot create turns.");
  }
  if (scheduleTime === undefined) {
    throw Error("The entered time is not available");
  }
  if (weekday === undefined) {
    throw Error("The chosen day is incorrect");
  } else {
    let newTurn: Turn = TurnSource.create({
      day: weekday,
      time: scheduleTime,
      userId: userExist.id,
      status: ETurnStatus.AVAILABLE,
    });
    await TurnSource.save(newTurn);
    return newTurn;
  }
};

export let reserveTurnServices = async (
  id: string,
  turnId: string
): Promise<Turn> => {
  const userReserve = await userRepository.findById(id);
  if (userReserve === null) {
    throw Error("User not  Found");
  }
  const turnToReserve = await TurnSource.findOne({
    where: { turnId },
    relations: { user: true },
  });
  if (turnToReserve === null) {
    throw Error("Turn not  Found");
  }
  if (turnToReserve.status === ETurnStatus.RESERVED) {
    throw Error("This turn  is not available");
  } else {
    turnToReserve.user = userReserve;
    turnToReserve.status = ETurnStatus.RESERVED;
    TurnSource.save(turnToReserve);
    return turnToReserve;
  }
};

export let updateTurnServices = async (
  id: string,
  turnId: string
): Promise<Turn> => {
  const turnCancel = await TurnSource.findOne({
    where: { turnId },
    relations: { user: true },
  });
  const userCanceler = await userRepository.findById(id);
  const userAdmin = await userRepository.findAdmin();
  if (turnCancel === null) {
    throw Error("Turn not  Found");
  }
  if (userCanceler === null) {
    throw Error("Turn not  Found");
  } else {
    turnCancel.user = userAdmin;
    turnCancel.status = ETurnStatus.AVAILABLE;
    TurnSource.save(turnCancel);
    return turnCancel;
  }
};

export let deleteTurnServices = async (id: string) => {
  const turnDelete = await TurnSource.findOneBy({ turnId: id });
  const userIsAdmin = await userRepository.findOneBy({
    id: turnDelete?.userId,
  });
  if (!turnDelete) {
    throw Error("turn not found");
  }
  if (userIsAdmin?.type !== "admin") {
    throw Error("This user cannot delete turns.");
  } else {
    TurnSource.delete(turnDelete);
    return "turn removed successfully";
  }
};
