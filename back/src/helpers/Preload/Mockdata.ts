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
    phone: 1234567890,
    type: "admin",
    credentials: {
      username: "admin",
      password: "adminpassword",
    },
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: 2345678901,
    type: "user",
    credentials: {
      username: "johndoe",
      password: "password123",
    },
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: 3456789012,
    type: "user",
    credentials: {
      username: "janesmith",
      password: "securepass456",
    },
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: 4567890123,
    type: "user",
    credentials: {
      username: "bobjohnson",
      password: "bobpassword789",
    },
  },
];
