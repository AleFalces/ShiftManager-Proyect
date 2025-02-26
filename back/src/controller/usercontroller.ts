import { Request, Response } from "express";
import {
  getUsersServices,
  updateUsersServices,
  deleteUsersServices,
  createUsersServices,
} from "../services";
import IUser from "../interfaces/IUser";

export let getUsers = async () => {};
export let createUsers = async (req: Request, res: Response) => {
  const { name, email, active } = req.body;
  const newUser: IUser = await createUsersServices({ name, email, active });
  res.status(201).json(newUser);
};

export let updateUsers = async () => {};

export let deleteUsers = async () => {};
