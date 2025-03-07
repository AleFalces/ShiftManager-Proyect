import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import { preloadData } from "./helpers/preloadData";

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully");

    await preloadData();

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

startServer();
