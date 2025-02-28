import { Request, Response } from "express";
import {
  getUsersServices,
  updateUsersServices,
  deleteUsersServices,
  createUsersServices,
} from "../services/userServices";
import IUser from "../interfaces/IUser";

export let getUsers = async (req: Request, res: Response) => {
  let allUsers: IUser[] = await getUsersServices();
  res.status(200).json(allUsers);
};
export let createUsers = async (req: Request, res: Response) => {
  const { name, email, phone, username, password } = req.body;
  const newUser: IUser = await createUsersServices(
    {
      name,
      email,
      phone,
    },
    { username, password }
  );
  res.status(201).json(newUser);
};

export let updateUsers = async (req: Request, res: Response) => {
  let userChanges: string = await updateUsersServices();
  res.status(200).send(userChanges);
};

export let deleteUsers = async (req: Request, res: Response) => {
  let deletedUser: string = await deleteUsersServices();
  res.status(200).send(deletedUser);
};
