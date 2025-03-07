"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preloadusers = exports.PreloadTurns = void 0;
const ITurns_1 = require("../interfaces/ITurns");
exports.PreloadTurns = [
  ...Object.values(ITurns_1.EWeekday).flatMap((day) => [
    { day, time: ITurns_1.ETime.EightAM, status: "available" },
    { day, time: ITurns_1.ETime.NineAM, status: "available" },
    { day, time: ITurns_1.ETime.ThreePM, status: "available" },
    { day, time: ITurns_1.ETime.FourPM, status: "available" },
  ]),
];
exports.Preloadusers = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
