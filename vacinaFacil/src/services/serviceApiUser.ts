import axios from "axios";
import { PostDataUser } from "../@types/api";
import { Alert } from "react-native";

export const buscar = async () => {
  try {
    const response = await axios.get(
      "https://673e07880118dbfe8609d916.mockapi.io/usuario"
    );
    return response.data  
  } catch (error) {
    console.log("Erro ao fazer o GET", error);
    return []
  }
};

export const comparar = async (userEmail:string, userPassword: string) => {
  const dados =  await buscar()
  const user =  dados.find((user:PostDataUser) => userEmail === user.email && userPassword === user.senha)
  if (user) {
    Alert.alert("Usuário validado");
    return user;
  } else {
    Alert.alert("Login ou senha inválidos");
    return null;
  }
}



export const inserir = async (data: PostDataUser) => {
  try {
    const response = await axios.post(
      "https://673e07880118dbfe8609d916.mockapi.io/usuario",
      data
    );
    console.log("Respota da API", response.data);
  } catch (error) {
    console.error("Erro ao fazer o POST", error);
  }
};