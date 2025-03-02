import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "159753qop.",
  database: "turn_proyect",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
