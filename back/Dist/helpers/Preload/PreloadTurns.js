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
exports.preloadTurnsData = void 0;
const data_source_1 = require("../../config/data-source");
const userRepository_1 = __importDefault(require("../../repositories/userRepository"));
const turnsServices_1 = require("../../services/turnsServices");
const Mockdata_1 = require("./Mockdata");
const preloadTurnsData = () => __awaiter(void 0, void 0, void 0, function* () {
    data_source_1.AppDataSource.manager.transaction((transactionalEntityManager) => __awaiter(void 0, void 0, void 0, function* () {
        const allTurns = yield data_source_1.TurnSource.find();
        if (allTurns.length) {
            console.log("Turns are already loaded into the DB");
            return;
        }
        const adminUser = yield userRepository_1.default.findOne({
            where: { type: "admin" },
            relations: { turns: true },
        });
        if (!adminUser) {
            console.log("Admin user not found");
            return;
        }
        for (const turn of Mockdata_1.PreloadTurns) {
            const newTurn = yield (0, turnsServices_1.createTurnServices)(Object.assign(Object.assign({}, turn), { userId: adminUser.id }));
            yield transactionalEntityManager.save(newTurn);
        }
        console.log("Turns loaded successfully");
    }));
});
exports.preloadTurnsData = preloadTurnsData;
