import { NextFunction, Request, Response } from "express";
import userRepository from "../repositories/userRepository";

export const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  const user = await userRepository.findOneBy({ id });
  if (user) {
    next();
  } else {
    next({ message: "invalid user", statusCode: 400 });
  }
};
