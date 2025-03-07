"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const Turns_1 = require("../entities/Turns");
const turnsRepository = data_source_1.AppDataSource.getRepository(Turns_1.Turn);
exports.default = turnsRepository;
