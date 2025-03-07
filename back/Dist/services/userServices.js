"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsersServices =
  exports.loginUserService =
  exports.updateUsersServices =
  exports.createUsersServices =
  exports.getUserByIServices =
  exports.getUsersServices =
    void 0;
const data_source_1 = require("../config/data-source");
const credentialServices_1 = require("./credentialServices");
const userRepository_1 = __importDefault(
  require("../repositories/userRepository")
);
const turnsRepository_1 = __importDefault(
  require("../repositories/turnsRepository")
);
const ITurns_1 = require("../interfaces/ITurns");
let getUsersServices = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    let AllUsers = yield data_source_1.UserSource.find({
      relations: {
        turns: true,
      },
    });
    return AllUsers;
  });
exports.getUsersServices = getUsersServices;
let getUserByIServices = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    let userById = yield userRepository_1.default.findById(id);
    if (userById === null || userById === undefined) {
      throw Error("User Not Found");
    } else return userById;
  });
exports.getUserByIServices = getUserByIServices;
let createUsersServices = (userData, userCredential) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield userRepository_1.default.userCreate(
      userData,
      userCredential
    );
    return newUser;
  });
exports.createUsersServices = createUsersServices;
let updateUsersServices = (userdata) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, email, phone } = userdata;
    const userUpdate = yield userRepository_1.default.findById(id);
    userUpdate.email = email;
    userUpdate.name = name;
    userUpdate.phone = phone;
    userRepository_1.default.save(userUpdate);
    return userUpdate;
  });
exports.updateUsersServices = updateUsersServices;
let loginUserService = (userdata) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userLog = yield userRepository_1.default.findOne({
      where: { id: userdata.id },
      relations: { credentials: true },
    });
    if (userLog === null) {
      throw Error("User not found");
    }
    if (userLog.credentials.username !== userdata.username) {
      throw Error("incorrect username");
    }
    if (userLog.credentials.password !== userdata.password) {
      throw Error("incorrect pasword");
    } else {
      return "usuario logueado correctamente";
    }
  });
exports.loginUserService = loginUserService;
let deleteUsersServices = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userDelete = yield yield userRepository_1.default.findOne({
      where: { id: id },
      relations: {
        turns: true,
        credentials: true,
      },
    });
    if (!userDelete) {
      throw Error("User not foud");
    }
    const adminUser = yield userRepository_1.default.findOne({
      where: { type: "admin" },
      relations: {
        turns: true,
        credentials: true,
      },
    });
    if (!adminUser) {
      throw new Error("Admin user not found");
    }
    for (const turn of userDelete.turns) {
      turn.user = adminUser;
      turn.status = ITurns_1.ETurnStatus.AVAILABLE;
      yield turnsRepository_1.default.save(turn);
    }
    yield (0,
    credentialServices_1.deleteCredentialService)(userDelete.credentials.id);
    yield userRepository_1.default.remove(userDelete);
    return "User deleted, credentials removed, and all turns reassigned to admin.";
  });
exports.deleteUsersServices = deleteUsersServices;
