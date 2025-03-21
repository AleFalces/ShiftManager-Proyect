import { Request, Response } from "express";
import {
  getUsersServices,
  updateUsersServices,
  deleteUsersServices,
  createUsersServices,
  getUserByIServices,
  loginUserService,
} from "../services/userServices";
import catchErros from "../utils/utils";
import { User } from "../entities/User";

let getUsers = async (req: Request, res: Response) => {
  let allUsers: User[] = await getUsersServices();
  res.status(200).json(allUsers);
};

let getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  let UsersById: User | null | undefined = await getUserByIServices(id);
  res.status(200).json(UsersById);
};

let createUsers = async (req: Request, res: Response) => {
  const { name, email, phone, type, username, password } = req.body;
  const newUser: User | void = await createUsersServices(
    {
      name,
      email,
      phone,
      type,
    },
    { username, password }
  );
  res.status(201).json(newUser);
};

let updateUsers = async (req: Request, res: Response) => {
  const userdata = req.body;
  let userChanges = await updateUsersServices(userdata);
  res.status(200).send(userChanges);
};

let loginUser = async (req: Request, res: Response) => {
  const userData = req.body;
  let loggedUser = await loginUserService(userData);
  res.status(200).json(loggedUser);
};

let deleteUsers = async (req: Request, res: Response) => {
  const { id } = req.params;
  let deletedUser: string = await deleteUsersServices(id);
  res.status(200).send(deletedUser);
};

export default {
  getUsers: catchErros(getUsers),
  getUserById: catchErros(getUserById),
  createUsers: catchErros(createUsers),
  updateUsers: catchErros(updateUsers),
  deleteUsers: catchErros(deleteUsers),
  loginUser: catchErros(loginUser),
};
