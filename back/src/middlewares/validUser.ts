import { NextFunction, Request, Response } from "express";
import { users } from "../services/userServices";

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  const user = users.find((user) => user.id === id);
  if (user) {
    next();
  } else {
    next({ message: "invalid user", statusCode: 400 });
  }
};
