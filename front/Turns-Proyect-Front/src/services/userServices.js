import { apiServices } from "./apiServices";

export const getAllTurn = async () => {
  try {
    const response = apiServices.get("/turns");
    return response.data;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};
