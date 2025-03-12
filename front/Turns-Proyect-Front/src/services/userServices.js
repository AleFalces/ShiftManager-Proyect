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

export const postCreateUser = async (usernData) => {
  try {
    const response = await apiServices.put(`${path}/register`, usernData);
    return response;
  } catch (error) {
    throw new Error(`Erro fetchin : ${error.message}`);
  }
};

export const putLoginUser = async (loginData) => {
  try {
    console.log(loginData);

    const response = await apiServices.post(`${path}/login`, loginData);
    console.log(response.data);
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
