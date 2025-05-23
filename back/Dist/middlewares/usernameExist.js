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
exports.usernameExist = void 0;
const data_source_1 = require("../config/data-source");
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const usernameExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email } = req.body;
    let emailExist = yield userRepository_1.default.findOneBy({ email });
    let usernameExist = yield data_source_1.CredetialSource.findOneBy({ username });
    if (usernameExist) {
        next({ message: "Username Already used", statusCode: 400 });
    }
    if (emailExist) {
        next({ message: "Email Already used", statusCode: 400 });
    }
    else {
        next();
    }
});
exports.usernameExist = usernameExist;
