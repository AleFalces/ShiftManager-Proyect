import { NextFunction, Request, Response } from "express";
import { users } from "../services/userServices";
import { credential } from "../services/credentialServices";

export const usernameExist = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email } = req.body;
  const usernameExist = credential.find((user) => user.username === username);
  const emailExist = users.find((user) => user.email === email);

  if (usernameExist) {
    next({ message: "Username Already used", statusCode: 400 });
  }
  if (emailExist) {
    next({ message: "Email is not available", statusCode: 400 });
  } else {
    next();
  }
};
