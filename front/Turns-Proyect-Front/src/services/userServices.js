import { apiServices } from "./apiServices";

const path = "/users";

export const getAllUsers = async () => {
  try {
    const response = await apiServices.get(path);
    return response.data;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};

export const getUserById = async (id) => {
  try {
    const response = await apiServices.get(`path${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};

export const postCreateUser = async (userData) => {
  try {
    console.log("SOY USERDATA Y ESTOY EN POSTcREATE: ", userData);
    const response = await apiServices.post(`${path}/register`, userData);
    return response;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};

export const putLoginUser = async (loginData) => {
  try {
    const response = await apiServices.post(`${path}/login`, loginData);
    return response.data;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await apiServices.delete(`${path}/cancel/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};

export const putUpdateuser = async (turnData) => {
  try {
    const response = await apiServices.put(`${path}/updat`, turnData);
    return response.data;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};
