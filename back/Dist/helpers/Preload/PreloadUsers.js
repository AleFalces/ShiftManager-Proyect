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
exports.preloadUsersData = void 0;
const data_source_1 = require("../../config/data-source");
const userRepository_1 = __importDefault(require("../../repositories/userRepository"));
const Mockdata_1 = require("./Mockdata");
const preloadUsersData = () => __awaiter(void 0, void 0, void 0, function* () {
    data_source_1.AppDataSource.manager.transaction((transactionalEntityManager) => __awaiter(void 0, void 0, void 0, function* () {
        const allUsers = yield userRepository_1.default.find();
        if (allUsers.length) {
            console.log("Users are already loaded into the DB");
            return;
        }
        for (const user of Mockdata_1.Preloadusers) {
            const newUser = userRepository_1.default.create(user);
            yield transactionalEntityManager.save(newUser);
        }
        console.log("Users loaded successfully");
    }));
});
exports.preloadUsersData = preloadUsersData;
