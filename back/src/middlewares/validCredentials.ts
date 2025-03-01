import { NextFunction, Request, Response } from "express";
import { credential } from "../services/credentialServices";

export const validateCredentials = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  const user = credential.find((user) => user.username === username);
  if (user) {
    if (user.password === password) {
      next();
    } else {
      next({ message: "Invalid password", statusCode: 400 });
    }
  } else {
    next({ message: "Invalid username", statusCode: 400 });
  }
};
