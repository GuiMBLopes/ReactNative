import axios from "axios";
import { PostDataUser } from "../@types/api";

export const buscar = async () => {
  try {
    const response = await axios.get(
      "https://673e07880118dbfe8609d916.mockapi.io/usuario"
    );
    return response.data;
  } catch (error) {
    console.log("Erro ao fazer o GET", error);
    return [];
  }
};

export const inserir = async (data: PostDataUser) => {
  try {
    const response = await axios.post(
      "https://673e07880118dbfe8609d916.mockapi.io/usuario",
      data
    );
  } catch (error) {
    console.error("Erro ao fazer o POST", error);
  }
};

export const deletarUsuario = async (id: string) => {
  try {
    const response = await axios.delete(
      `https://673e07880118dbfe8609d916.mockapi.io/usuario/${id}`
    );
  } catch (error) {
    console.log("Erro ao fazer o Delete", error);
  }
};
