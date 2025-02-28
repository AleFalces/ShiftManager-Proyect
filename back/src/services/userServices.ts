import ICredentialDot from "../Dto/CredentialDto";
import IUserDto from "../Dto/UserDto";
import IUser from "../interfaces/IUser";
import { createCredentialServise } from "./credentialServices";

export let users: IUser[] = [];

let id: string = "1";
let credentialsId: number = 1;

export let getUsersServices = async (): Promise<IUser[]> => {
  return users;
};

export let getUserByIServices = async (
  id: string
): Promise<IUser | undefined> => {
  let userById = users.find((user) => user.id === id);
  return userById;
};

export let createUsersServices = async (
  userData: IUserDto,
  userCredential: ICredentialDot
): Promise<IUser> => {
  let createCredential = await createCredentialServise(userCredential);
  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    credentialsId: createCredential.id,
  };
  users.push(newUser);
  id = "1" + credentialsId++;
  credentialsId++;
  return newUser;
};

export let updateUsersServices = async () => {
  return "User updated";
};

export let deleteUsersServices = async () => {
  return "User deleted";
};
