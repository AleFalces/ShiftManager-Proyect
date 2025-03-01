import { NextFunction, Request, Response } from "express";

export let validateCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { name, email, phone, username, password } = req.body;
  if (typeof name !== "string" || name === "") {
    next({ message: "Name is invalid", statusCode: 400 });
  }
  if (typeof phone !== "number") {
    next({ message: "Phone number invalid", statusCode: 400 });
  }
  if (typeof email !== "string" || email === "") {
    next({ message: "Email is invalid", statusCode: 400 });
  }

  if (typeof username !== "string" || username === "") {
    next({ message: "Username Is invalid", statusCode: 400 });
  }
  if (typeof password !== "string" || password === "") {
    next({ message: "Password is invalid", statusCode: 400 });
  } else {
    next();
  }
};
