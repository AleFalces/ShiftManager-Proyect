import { NextFunction, Request, Response } from "express";
import { credential } from "../services/credentialServices";
import { CredetialSource } from "../config/data-source";

export const validateCredentials = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  let user = await CredetialSource.findOneBy({ username });
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
