import ICredentialDot from "../Dto/CredentialDto";
import IUserDto from "../Dto/UserDto";
import { IUserUpdateDto } from "../Dto/UserUpdateDto";
import { User } from "../entities/User";
import { deleteCredentialService } from "./credentialServices";
import userRepository from "../repositories/userRepository";

import { ETurnStatus } from "../interfaces/ITurns";
import { ILoginDto } from "../Dto/LoginDto";
import { CredetialSource, TurnSource } from "../config/data-source";

export let getUsersServices = async (): Promise<User[]> => {
  let AllUsers = await userRepository.find({
    relations: {
      turns: true,
    },
  });
  return AllUsers;
};

export let getUserByIServices = async (id: string): Promise<User> => {
  let userById = await userRepository.findById(id);
  if (userById === null || userById === undefined) {
    throw Error("User Not Found");
  } else return userById;
};

export let createUsersServices = async (
  userData: IUserDto,
  userCredential: ICredentialDot
): Promise<User | void> => {
  const newUser: User | void = await userRepository.userCreate(
    userData,
    userCredential
  );

  return newUser;
};

export let updateUsersServices = async (userdata: IUserUpdateDto) => {
  const { id, name, email, phone } = userdata;
  const userUpdate = await userRepository.findById(id);
  userUpdate.email = email;
  userUpdate.name = name;
  userUpdate.phone = phone;
  userRepository.save(userUpdate);
  return userUpdate;
};

export let loginUserService = async (userdata: ILoginDto) => {
  const userLog = await CredetialSource.findOne({
    where: { username: userdata.username },
    relations: { user: true },
  });
  if (userLog === null) {
    throw Error("User not found");
  }
  if (userLog.username !== userdata.username) {
    throw Error("incorrect username");
  }
  if (userLog.password !== userdata.password) {
    throw Error("incorrect pasword");
  } else {
    const logedUser: User = await userRepository.findById(userLog.user.id);
    console.log(logedUser);
    return logedUser;
  }
};

export let deleteUsersServices = async (id: string) => {
  const userDelete = await await userRepository.findOne({
    where: { id: id },
    relations: {
      turns: true,
      credentials: true,
    },
  });
  if (!userDelete) {
    throw Error("User not foud");
  }
  const adminUser = await userRepository.findOne({
    where: { type: "admin" },
    relations: {
      turns: true,
      credentials: true,
    },
  });

  if (!adminUser) {
    throw new Error("Admin user not found");
  }
  for (const turn of userDelete.turns) {
    turn.user = adminUser;
    turn.status = ETurnStatus.AVAILABLE;
    await TurnSource.save(turn);
  }
  await deleteCredentialService(userDelete.credentials.id);

  await userRepository.remove(userDelete);
  return "User deleted, credentials removed, and all turns reassigned to admin.";
};
