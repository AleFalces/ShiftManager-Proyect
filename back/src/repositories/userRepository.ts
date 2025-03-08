import { AppDataSource } from "../config/data-source";
import ICredentialDot from "../Dto/CredentialDto";
import IUserDto from "../Dto/UserDto";
import { User } from "../entities/User";
import { EUserTypes } from "../interfaces/IUser";
import { createCredentialServise } from "../services/credentialServices";

const userRepository = AppDataSource.getRepository(User).extend({
  findById: async function (id: string) {
    const user: User | null = await this.findOneBy({ id });

    if (user === null || user === undefined) {
      throw Error("User not found");
    } else {
      return user;
    }
  },

  userCreate: async function (
    userData: IUserDto,
    userCredential: ICredentialDot
  ) {
    const userType = Object.values(EUserTypes).find((t) => t === userData.type);
    if (userType === undefined) {
      throw Error("Please enter a valid user type");
    } else {
      let createCredential = await createCredentialServise(userCredential);
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
