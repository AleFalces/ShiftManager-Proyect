import { NextFunction, Request, Response } from "express";
import { users } from "../services/userServices";
import { UserSource } from "../config/data-source";

export const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  const user = await UserSource.findOneBy({ id });
  if (user) {
    next();
  } else {
    next({ message: "invalid user", statusCode: 400 });
  }
};
