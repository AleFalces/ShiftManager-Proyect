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
exports.preloadData = void 0;
const data_source_1 = require("../config/data-source");
const PreloadTurns_1 = require("./Preload/PreloadTurns");
const PreloadUsers_1 = require("./Preload/PreloadUsers");
const preloadData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield data_source_1.AppDataSource.manager.transaction(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, PreloadUsers_1.preloadUsersData)();
            yield (0, PreloadTurns_1.preloadTurnsData)();
        }));
        console.log("Database preloaded successfully");
    }
    catch (error) {
        console.error("Error preloading data:", error);
    }
});
exports.preloadData = preloadData;
