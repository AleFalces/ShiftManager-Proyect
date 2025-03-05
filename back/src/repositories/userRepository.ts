import { AppDataSource, UserSource } from "../config/data-source";
import ICredentialDot from "../Dto/CredentialDto";
import IUserDto from "../Dto/UserDto";
import { Turn } from "../entities/Turns";
import { User } from "../entities/User";
import { EUserTypes } from "../interfaces/IUser";
import {
  createCredentialServise,
  deleteCredentialService,
} from "../services/credentialServices";
import turnsRepository from "./turnsRepository";

const userRepository = AppDataSource.getRepository(User).extend({
  findById: async function (id: string) {
    const user: User | null = await this.findOneBy({ id });
    console.log(user);
    if (user === null) {
      throw Error("User not found");
    } else {
      return user;
    }
  },

  userCreate: async function (
    userData: IUserDto,
    userCredential: ICredentialDot
  ) {
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
      const newUser = await this.create(datauser);
      this.save(newUser);
      return newUser;
    }
  },
  findAdmin: async function () {
    const adminUser = await userRepository.findOne({
      where: { type: "admin" },
    });
    if (adminUser === null) {
      throw Error("User not found");
    } else {
      return adminUser;
    }
  },
});

export default userRepository;
