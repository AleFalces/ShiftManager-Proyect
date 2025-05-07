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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const User_1 = require("../entities/User");
const IUser_1 = require("../interfaces/IUser");
const credentialServices_1 = require("../services/credentialServices");
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User).extend({
    findById: function (id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findOneBy({ id });
            if (user === null || user === undefined) {
                throw Error("User not found");
            }
            else {
                return user;
            }
        });
    },
    userCreate: function (userData, userCredential) {
        return __awaiter(this, void 0, void 0, function* () {
            const userType = Object.values(IUser_1.EUserTypes).find((t) => t === userData.type);
            if (userType === undefined) {
                throw Error("Please enter a valid user type");
            }
            else {
                let createCredential = yield (0, credentialServices_1.createCredentialServise)(userCredential);
                const datauser = Object.assign(Object.assign({}, userData), { type: "user", credentials: createCredential });
                const newUser = yield this.create(datauser);
                this.save(newUser);
                return newUser;
            }
        });
    },
    findAdmin: function () {
        return __awaiter(this, void 0, void 0, function* () {
            const adminUser = yield userRepository.findOne({
                where: { type: "admin" },
            });
            if (adminUser === null) {
                throw Error("User not found");
            }
            else {
                return adminUser;
            }
        });
    },
});
exports.default = userRepository;
