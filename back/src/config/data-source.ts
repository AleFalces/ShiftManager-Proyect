import { DataSource } from "typeorm";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { Turn } from "../entities/Turns";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "159753qop.",
  database: "turn_proyect",
  //dropSchema : true
  synchronize: true,
  logging: ["error"],
  entities: [Credential, User, Turn],
  subscribers: [],
  migrations: [],
});
