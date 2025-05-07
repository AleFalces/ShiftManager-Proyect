import server from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import { preloadData } from "./helpers/preloadData";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;

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
