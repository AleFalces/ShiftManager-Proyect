"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./config/envs");
require("reflect-metadata");
const data_source_1 = require("./config/data-source");
data_source_1.AppDataSource.initialize().then((res) => {
    console.log("Database conected succesfull");
    server_1.default.listen(envs_1.PORT, () => {
        console.log(`server listening on port ${envs_1.PORT}`);
    });
});
// server.listen(PORT, () => {
//   console.log(`server listening on port ${PORT}`);
// });
