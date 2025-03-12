import { apiServices } from "./apiServices";

const path = "/turns";

export const getAllTurns = async () => {
  try {
    const response = await apiServices.get(path);
    return response.data;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};

export const getTurnById = async (id) => {
  try {
    const response = await apiServices.get(`path${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};

export const putReserveTurn = async (turnData) => {
  try {
    const response = await apiServices.put(`${path}/reserve/`, turnData);
    return response.data;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};

export const putCancelTurn = async (turnData) => {
  try {
    const response = await apiServices.put(`${path}/cancel/`, turnData);
    return response.data;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};

export const deleteTurn = async (id) => {
  try {
    const response = await apiServices.delete(`${path}/cancel/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};

export const postCreateTurn = async (turnData) => {
  try {
    const response = await apiServices.post(`${path}/schedule`, turnData);
    return response.data;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};
