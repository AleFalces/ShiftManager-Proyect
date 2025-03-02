import { NextFunction, Request, Response } from "express";
import {
  getUsersServices,
  updateUsersServices,
  deleteUsersServices,
  createUsersServices,
  getUserByIServices,
} from "../services/userServices";
import catchErros from "../utils/utils";
import { User } from "../entities/User";

let getUsers = async (req: Request, res: Response) => {
  let allUsers: User[] = await getUsersServices();
  res.status(200).json(allUsers);
};

let getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  console.log("ID recibido:", id);
  let UsersById: User | null | undefined = await getUserByIServices(id);
  if (UsersById === null || UsersById === undefined) {
    next({ message: "User not Found", statusCode: 400 });
  } else {
    res.status(200).json(UsersById);
  }
};

let createUsers = async (req: Request, res: Response) => {
  const { name, email, phone, username, password } = req.body;
  const newUser: User = await createUsersServices(
    {
      name,
      email,
      phone,
    },
    { username, password }
  );
  res.status(201).json(newUser);
};

let updateUsers = async (req: Request, res: Response) => {
  let userChanges: string = await updateUsersServices();
  res.status(200).send(userChanges);
};

let deleteUsers = async (req: Request, res: Response) => {
  let deletedUser: string = await deleteUsersServices();
  res.status(200).send(deletedUser);
};

export default {
  getUsers: catchErros(getUsers),
  getUserById: catchErros(getUserById),
  createUsers: catchErros(createUsers),
  updateUsers: catchErros(updateUsers),
  deleteUsers: catchErros(deleteUsers),
};
