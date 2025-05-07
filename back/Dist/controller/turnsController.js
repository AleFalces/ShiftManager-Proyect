"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const turnsServices_1 = require("../services/turnsServices");
const utils_1 = __importDefault(require("../utils/utils"));
let getAllTurn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let turn = yield (0, turnsServices_1.getAllTurnServices)();
    res.status(200).send(turn);
});
let getTurnById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let turnById = yield (0, turnsServices_1.getTurnByIServices)(id);
    res.status(200).json(turnById);
});
let createTurn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { userId, day, time } = req.body;
    let createdTurn = yield (0, turnsServices_1.createTurnServices)({
        userId,
        day,
        time,
    });
    res.status(200).send(createdTurn);
});
let updateTurn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, turnId } = req.body;
    let TurnUpdated = yield (0, turnsServices_1.updateTurnServices)(id, turnId);
    res.status(200).send(TurnUpdated);
});
let reserveTurn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, turnId } = req.body;
    let turnReserve = yield (0, turnsServices_1.reserveTurnServices)(id, turnId);
    res.status(200).send(turnReserve);
});
let deleteTurn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let deleted = yield (0, turnsServices_1.deleteTurnServices)(id);
    res.status(200).send(deleted);
});
exports.default = {
    getAllTurn: (0, utils_1.default)(getAllTurn),
    createTurn: (0, utils_1.default)(createTurn),
    getTurnById: (0, utils_1.default)(getTurnById),
    updateTurn: (0, utils_1.default)(updateTurn),
    deleteTurn: (0, utils_1.default)(deleteTurn),
    reserveTurn: (0, utils_1.default)(reserveTurn),
};
