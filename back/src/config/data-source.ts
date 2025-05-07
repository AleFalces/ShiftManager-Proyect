import { DataSource } from "typeorm";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { Turn } from "../entities/Turns";
import * as dotenv from "dotenv";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource(
  isProduction
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        synchronize: true,
        logging: false,
        entities: [Credential, User, Turn],
        subscribers: [],
        migrations: [],
      }
    : {
        type: "postgres",
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || "5432"),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: true,
        logging: false,
        entities: [Credential, User, Turn],
        subscribers: [],
        migrations: [],
      }
);

export const CredetialSource = AppDataSource.getRepository(Credential);
export const TurnSource = AppDataSource.getRepository(Turn);
