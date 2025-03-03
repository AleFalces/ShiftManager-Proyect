import { NextFunction, Request, Response } from "express";
import { CredetialSource, UserSource } from "../config/data-source";

export const usernameExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email } = req.body;
  let emailExist = await UserSource.findOneBy({ email });

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
