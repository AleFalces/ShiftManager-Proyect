import { AppDataSource } from "../config/data-source";
import { Turn } from "../entities/Turns";

const turnsRepository = AppDataSource.getRepository(Turn);

export default turnsRepository;
