import { EStatus, Iturn } from "../interfaces/ITurns";
import { ITurnDto } from "../Dto/TurnsDto";

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

export let getAllTurnServices = async (): Promise<Iturn[]> => {
  return turns;
};

export let getTurnByIServices = async (
  id: string
): Promise<Iturn | undefined> => {
  let userById = turns.find((turn) => turn.id === id);
  return userById;
};

export let createTurnServices = async (turnData: ITurnDto): Promise<Iturn> => {
  const newTurn: Iturn = {
    id,
    date: turnData.date,
    time: turnData.time,
    userId: turnData.userId,
    status: EStatus.AVAILABLE,
  };
  turns.push(newTurn);
  id = "1" + turnData.userId++;

  return newTurn;
};

export let updateTurnServices = async () => {
  return "updated turn";
};

export let deleteTurnServices = async () => {
  return "deleted turn";
};
