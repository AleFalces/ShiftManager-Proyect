import { AppDataSource, TurnSource } from "../config/data-source";
import { preloadTurnsData } from "./Preload/PreloadTurns";
import { preloadUsersData } from "./Preload/PreloadUsers";

export const preloadData = async () => {
  try {
    await AppDataSource.manager.transaction(async () => {
      await preloadUsersData();
      await preloadTurnsData();
    });

    console.log("Database preloaded successfully");
  } catch (error) {
    console.error("Error preloading data:", error);
  }
};
