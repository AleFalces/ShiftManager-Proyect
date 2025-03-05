import { UserSource } from "../config/data-source";
import ICredentialDot from "../Dto/CredentialDto";
import IUserDto from "../Dto/UserDto";
import { IUserUpdateDto } from "../Dto/UserUpdateDto";
import { User } from "../entities/User";
import { EUserTypes } from "../interfaces/IUser";
import {
  createCredentialServise,
  deleteCredentialService,
} from "./credentialServices";
import userRepository from "../repositories/userRepository";
import turnsRepository from "../repositories/turnsRepository";
import { ETurnStatus } from "../interfaces/ITurns";

export let getUsersServices = async (): Promise<User[]> => {
  let AllUsers = await UserSource.find({
    relations: {
      turns: true,
    },
  });
  return AllUsers;
};

export let getUserByIServices = async (id: string): Promise<User> => {
  let userById = userRepository.findById(id);
  return userById;
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
  // if(!userUpdate){
  //   throw Error("user not found")
  // }else{
  //   UserSource.update(id, name, email, phone)
  // }
};

export let deleteUsersServices = async (id: string) => {
  console.log(id);
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
    await turnsRepository.save(turn);
  }
  await deleteCredentialService(userDelete.credentials.id);

  await userRepository.remove(userDelete);
  return "User deleted, credentials removed, and all turns reassigned to admin.";
};
