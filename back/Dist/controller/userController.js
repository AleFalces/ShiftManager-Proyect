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
const userServices_1 = require("../services/userServices");
const utils_1 = __importDefault(require("../utils/utils"));
let getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let allUsers = yield (0, userServices_1.getUsersServices)();
    res.status(200).json(allUsers);
});
let getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let UsersById = yield (0, userServices_1.getUserByIServices)(id);
    res.status(200).json(UsersById);
});
let createUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, type, username, password } = req.body;
    const newUser = yield (0, userServices_1.createUsersServices)({
        name,
        email,
        phone,
        type,
    }, { username, password });
    res.status(201).json(newUser);
});
let updateUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userdata = req.body;
    let userChanges = yield (0, userServices_1.updateUsersServices)(userdata);
    res.status(200).send(userChanges);
});
let loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    let loggedUser = yield (0, userServices_1.loginUserService)(userData);
    res.status(200).send("logged succesfull");
});
let deleteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let deletedUser = yield (0, userServices_1.deleteUsersServices)(id);
    res.status(200).send(deletedUser);
});
exports.default = {
    getUsers: (0, utils_1.default)(getUsers),
    getUserById: (0, utils_1.default)(getUserById),
    createUsers: (0, utils_1.default)(createUsers),
    updateUsers: (0, utils_1.default)(updateUsers),
    deleteUsers: (0, utils_1.default)(deleteUsers),
    loginUser: (0, utils_1.default)(loginUser),
};
