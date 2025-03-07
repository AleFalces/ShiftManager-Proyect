import express, {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from "express";
import router from "./routes";
import { IError } from "./interfaces/IError";
import cors from "cors";

const morgan = require("morgan");
const server = express();
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use(router);

server.use((error: IError, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof SyntaxError && "body" in error) {
    res.status(400).json({ message: "Invalid JSON format" });
  } else {
    res
      .status(error.statusCode || 500)
      .json(error.message || "Internal server error");
  }
});

export default server;
