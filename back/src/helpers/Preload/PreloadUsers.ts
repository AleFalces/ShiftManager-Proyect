import { AppDataSource } from "../../config/data-source";
import userRepository from "../../repositories/userRepository";
import { Preloadusers } from "./Mockdata";

export const preloadUsersData = async () => {
  AppDataSource.manager.transaction(async (transactionalEntityManager) => {
    const allUsers = await userRepository.find();
    if (allUsers.length) {
      console.log("Users are already loaded into the DB");
      return;
    }

    for (const user of Preloadusers) {
      const newUser = userRepository.create(user);
      await transactionalEntityManager.save(newUser);
    }
    console.log("Users loaded successfully");
  });
};
