import ICredentialDot from "../Dto/CredentialDto";
import IUserDto from "../Dto/UserDto";
import IUser from "../interfaces/IUser";
import { createCredentialServise } from "./credentialServices";

//como no tengo DB tengo q pushear los usuarios en un arreglo de ususarios

let users: IUser[] = [];

let id: number = 1;
let credentialsId: number = 1;

export let getUsersServices = async (): Promise<IUser[]> => {
  return users;
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
  id++;
  credentialsId++;
  return newUser;
};

export let updateUsersServices = async () => {
  return "User updated";
};

export let deleteUsersServices = async () => {
  return "User deleted";
};
