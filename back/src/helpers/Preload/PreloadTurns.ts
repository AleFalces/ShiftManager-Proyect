import { AppDataSource, TurnSource } from "../../config/data-source";
import userRepository from "../../repositories/userRepository";
import { createTurnServices } from "../../services/turnsServices";
import { PreloadTurns } from "./Mockdata";

export const preloadTurnsData = async () => {
  AppDataSource.manager.transaction(async (transactionalEntityManager) => {
    const allTurns = await TurnSource.find();
    if (allTurns.length) {
      console.log("Turns are already loaded into the DB");
      return;
    }

    const adminUser = await userRepository.findOne({
      where: { type: "admin" },
      relations: { turns: true },
    });

    if (!adminUser) {
      console.log("Admin user not found");
      return;
    }

    for (const turn of PreloadTurns) {
      const newTurn = await createTurnServices({
        ...turn,
        userId: adminUser.id,
      });
      await transactionalEntityManager.save(newTurn);
    }
    console.log("Turns loaded successfully");
  });
};
