import { ETime, EWeekday } from "../../interfaces/ITurns";

export const PreloadTurns = [
  ...Object.values(EWeekday).flatMap((day) => [
    {
      day,
      time: ETime.EightAM,
      status: "available",
      userId: "0",
    },
    {
      day,
      time: ETime.NineAM,
      status: "available",
      userId: "0",
    },
    {
      day,
      time: ETime.ThreePM,
      status: "available",
      userId: "0",
    },
    {
      day,
      time: ETime.FourPM,
      status: "available",
      userId: "0",
    },
  ]),
];

export const Preloadusers = [
  {
    name: "Admin User",
    email: "admin@example.com",
    phone: "1234567890",
    type: "admin",
    credentials: {
      username: "admin",
      password: "adminpassworD1.",
    },
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "2345678901",
    type: "user",
    credentials: {
      username: "johndoe",
      password: "Password123.",
    },
  },
];
