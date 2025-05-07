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
exports.validateCreateUser = void 0;
let validateCreateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { name, email, phone, username, password } = req.body;
    if (typeof name !== "string" || name === "") {
        next({ message: "Name is invalid", statusCode: 400 });
    }
    if (typeof phone !== "string" || phone === "") {
        next({ message: "Phone number invalid", statusCode: 400 });
    }
    if (typeof email !== "string" || email === "") {
        next({ message: "Email is invalid", statusCode: 400 });
    }
    if (typeof username !== "string" || username === "") {
        next({ message: "Username Is invalid", statusCode: 400 });
    }
    if (typeof password !== "string" || password === "") {
        next({ message: "Password is invalid", statusCode: 400 });
    }
    else {
        next();
    }
});
exports.validateCreateUser = validateCreateUser;
