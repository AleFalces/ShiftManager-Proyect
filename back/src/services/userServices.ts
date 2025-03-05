import { UserSource } from "../config/data-source";
import ICredentialDot from "../Dto/CredentialDto";
import IUserDto from "../Dto/UserDto";
import { User } from "../entities/User";
import { EUserTypes } from "../interfaces/IUser";
import { createCredentialServise } from "./credentialServices";

export let getUsersServices = async (): Promise<User[]> => {
  let AllUsers = await UserSource.find({
    relations: {
      credentials: true,
      turns: true,
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
  const userType = Object.values(EUserTypes).find((t) => t === userData.type);

  if (userType === undefined) {
    throw Error("Please enter a valid user type");
  } else {
    const datauser = {
      ...userData,
      type: userType,
      credentials: createCredential,
    };
    const newUser = UserSource.create(datauser);

    UserSource.save(newUser);
    return newUser;
  }
};

export let updateUsersServices = async () => {
  return "User updated";
};

export let deleteUsersServices = async (id: string) => {
  const userDelete = await UserSource.findOneBy({ id });
  if (userDelete) {
    UserSource.delete(userDelete);
    return "user deleted successfully";
  } else {
    throw Error("the user does not exist");
  }
};
