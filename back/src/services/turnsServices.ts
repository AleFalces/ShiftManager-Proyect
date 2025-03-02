import { EStatus, Iturn } from "../interfaces/ITurns";
import { ITurnDto } from "../Dto/TurnsDto";
import { Turn } from "../entities/Turns";
import { TurnSource, UserSource } from "../config/data-source";

export let turns: Iturn[] = [
  {
    id: "1",
    date: new Date("2025-03-01T10:00:00"),
    time: "10:00 AM",
    userId: 1,
    status: EStatus.AVAILABLE,
  },
  {
    id: "2",
    date: new Date("2025-03-01T11:00:00"),
    time: "11:00 AM",
    userId: 102,
    status: EStatus.RESERVED,
  },
  {
    id: "3",
    date: new Date("2025-03-01T12:00:00"),
    time: "12:00 PM",
    userId: 103,
    status: EStatus.AVAILABLE,
  },
  {
    id: "4",
    date: new Date("2025-03-01T01:00:00"),
    time: "01:00 PM",
    userId: 104,
    status: EStatus.RESERVED,
  },
  {
    id: "5",
    date: new Date("2025-03-01T02:00:00"),
    time: "02:00 PM",
    userId: 105,
    status: EStatus.AVAILABLE,
  },
];

let id: string = "1";

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
