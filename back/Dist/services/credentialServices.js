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
exports.deleteCredentialService = exports.createCredentialServise = void 0;
const data_source_1 = require("../config/data-source");
const credentialRepository_1 = __importDefault(require("../repositories/credentialRepository"));
const createCredentialServise = (userCredential) => __awaiter(void 0, void 0, void 0, function* () {
    let newCredential = yield data_source_1.CredetialSource.create({
        username: userCredential.username,
        password: userCredential.password,
    });
    yield credentialRepository_1.default.save(newCredential);
    return newCredential;
});
exports.createCredentialServise = createCredentialServise;
const deleteCredentialService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialExist = yield credentialRepository_1.default.findOneBy({ id });
    if (credentialExist === null) {
        throw Error("Credential Error");
    }
    else {
        yield credentialRepository_1.default.delete(credentialExist);
    }
});
exports.deleteCredentialService = deleteCredentialService;
