"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preloadusers = exports.PreloadTurns = void 0;
const ITurns_1 = require("../../interfaces/ITurns");
exports.PreloadTurns = [
    ...Object.values(ITurns_1.EWeekday).flatMap((day) => [
        {
            day,
            time: ITurns_1.ETime.EightAM,
            status: "available",
            userId: "0",
        },
        {
            day,
            time: ITurns_1.ETime.NineAM,
            status: "available",
            userId: "0",
        },
        {
            day,
            time: ITurns_1.ETime.TenAM,
            status: "available",
            userId: "0",
        },
        {
            day,
            time: ITurns_1.ETime.ElevenAM,
            status: "available",
            userId: "0",
        },
        {
            day,
            time: ITurns_1.ETime.TwelvePM,
            status: "available",
            userId: "0",
        },
        {
            day,
            time: ITurns_1.ETime.ThreePM,
            status: "available",
            userId: "0",
        },
        {
            day,
            time: ITurns_1.ETime.FourPM,
            status: "available",
            userId: "0",
        },
    ]),
];
exports.Preloadusers = [
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
        name: "ale falces",
        email: "ale@mail..com",
        phone: "2345678901",
        type: "user",
        credentials: {
            username: "alefalces",
            password: "Password123.",
        },
    },
];
