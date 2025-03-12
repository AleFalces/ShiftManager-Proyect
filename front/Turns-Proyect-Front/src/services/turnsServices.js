import { apiServices } from "./apiServices";

export const getAllTurns = async () => {
  try {
    const response = await apiServices.get("/turns");
    return response.data;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};
