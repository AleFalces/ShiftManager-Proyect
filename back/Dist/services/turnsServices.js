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
exports.deleteTurnServices = exports.updateTurnServices = exports.reserveTurnServices = exports.createTurnServices = exports.getTurnByIServices = exports.getAllTurnServices = void 0;
const ITurns_1 = require("../interfaces/ITurns");
const data_source_1 = require("../config/data-source");
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
let getAllTurnServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const allTurns = yield data_source_1.TurnSource.find({
        where: { status: "available" }, // Filtra solo los turnos disponibles
        order: { day: "ASC", time: "ASC" },
    });
    return allTurns;
});
exports.getAllTurnServices = getAllTurnServices;
let getTurnByIServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let turnById = yield data_source_1.TurnSource.findOneBy({ turnId: id });
    if (turnById === null) {
        throw Error("Turn not found");
    }
    return turnById;
});
exports.getTurnByIServices = getTurnByIServices;
let createTurnServices = (turnData) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, day, time } = turnData;
    const userExist = yield userRepository_1.default.findById(userId);
    const weekday = Object.values(ITurns_1.EWeekday).find((d) => d === day);
    const scheduleTime = Object.values(ITurns_1.ETime).find((t) => t === time);
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
    }
    else {
        let newTurn = data_source_1.TurnSource.create({
            day: weekday,
            time: scheduleTime,
            userId: userExist.id,
            status: ITurns_1.ETurnStatus.AVAILABLE,
        });
        yield data_source_1.TurnSource.save(newTurn);
        return newTurn;
    }
});
exports.createTurnServices = createTurnServices;
let reserveTurnServices = (id, turnId) => __awaiter(void 0, void 0, void 0, function* () {
    const userReserve = yield userRepository_1.default.findById(id);
    if (userReserve === null) {
        throw Error("User not  Found");
    }
    const turnToReserve = yield data_source_1.TurnSource.findOne({
        where: { turnId },
        relations: { user: true },
    });
    if (turnToReserve === null) {
        throw Error("Turn not  Found");
    }
    if (turnToReserve.status === ITurns_1.ETurnStatus.RESERVED) {
        throw Error("This turn  is not available");
    }
    else {
        turnToReserve.user = userReserve;
        turnToReserve.status = ITurns_1.ETurnStatus.RESERVED;
        data_source_1.TurnSource.save(turnToReserve);
        return turnToReserve;
    }
});
exports.reserveTurnServices = reserveTurnServices;
let updateTurnServices = (id, turnId) => __awaiter(void 0, void 0, void 0, function* () {
    const turnCancel = yield data_source_1.TurnSource.findOne({
        where: { turnId },
        relations: { user: true },
    });
    const userCanceler = yield userRepository_1.default.findById(id);
    const userAdmin = yield userRepository_1.default.findAdmin();
    if (turnCancel === null) {
        throw Error("Turn not  Found");
    }
    if (userCanceler === null) {
        throw Error("Turn not  Found");
    }
    else {
        turnCancel.user = userAdmin;
        turnCancel.status = ITurns_1.ETurnStatus.AVAILABLE;
        data_source_1.TurnSource.save(turnCancel);
        return turnCancel;
    }
});
exports.updateTurnServices = updateTurnServices;
let deleteTurnServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turnDelete = yield data_source_1.TurnSource.findOneBy({ turnId: id });
    const userIsAdmin = yield userRepository_1.default.findOneBy({
        id: turnDelete === null || turnDelete === void 0 ? void 0 : turnDelete.userId,
    });
    if (!turnDelete) {
        throw Error("turn not found");
    }
    if ((userIsAdmin === null || userIsAdmin === void 0 ? void 0 : userIsAdmin.type) !== "admin") {
        throw Error("This user cannot delete turns.");
    }
    else {
        data_source_1.TurnSource.delete(turnDelete);
        return "turn removed successfully";
    }
});
exports.deleteTurnServices = deleteTurnServices;
