import express from "express";
import router from "./routes";
const morgan = require("morgan");
const server = express();
server.use(morgan("dev"));
server.use(express.json());
server.use(router);

export default server;
