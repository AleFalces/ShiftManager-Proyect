import { NextFunction, Request, Response } from "express";

let catchErros = (controller: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return controller(req, res, next).catch(next);
  };
};

export default catchErros;
