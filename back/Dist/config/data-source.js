"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnSource = exports.CredetialSource = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Credential_1 = require("../entities/Credential");
const User_1 = require("../entities/User");
const Turns_1 = require("../entities/Turns");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "159753qop.",
    database: "turn_proyect",
    //dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [Credential_1.Credential, User_1.User, Turns_1.Turn],
    subscribers: [],
    migrations: [],
});
exports.CredetialSource = exports.AppDataSource.getRepository(Credential_1.Credential);
exports.TurnSource = exports.AppDataSource.getRepository(Turns_1.Turn);
