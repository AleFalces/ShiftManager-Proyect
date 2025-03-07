import { NextFunction, Request, Response } from "express";
import { CredetialSource } from "../config/data-source";
import userRepository from "../repositories/userRepository";

export const usernameExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email } = req.body;
  let emailExist = await userRepository.findOneBy({ email });

  let usernameExist = await CredetialSource.findOneBy({ username });

  if (usernameExist) {
    next({ message: "Username Already used", statusCode: 400 });
  }
  if (emailExist) {
    next({ message: "Email Already used", statusCode: 400 });
  } else {
    next();
  }
};
