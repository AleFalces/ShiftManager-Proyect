import { UserSource } from "../config/data-source";
import ICredentialDot from "../Dto/CredentialDto";
import IUserDto from "../Dto/UserDto";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";
import { createCredentialServise } from "./credentialServices";

export let users: IUser[] = [];

export let getUsersServices = async (): Promise<User[]> => {
  let AllUsers = await UserSource.find({
    relations: {
      credentials: true,
    },
  });
  return AllUsers;
};

export let getUserByIServices = async (
  id: string
): Promise<User | null | undefined> => {
  let userById = UserSource.findOneBy({ id });
  return userById;
};

export let createUsersServices = async (
  userData: IUserDto,
  userCredential: ICredentialDot
): Promise<User> => {
  let createCredential = await createCredentialServise(userCredential);
  console.log(createCredential);
  const datauser = { ...userData, credentials: createCredential };
  console.log(datauser);

  const newUser = UserSource.create(datauser);

  UserSource.save(newUser);
  return newUser;
};

export let updateUsersServices = async () => {
  return "User updated";
};

export let deleteUsersServices = async () => {
  return "User deleted";
};
