import axios from "axios";
import { PostDataUser } from "../@types/api";

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

export const comparar = async (userEmail:string) => {
  const dados =  await buscar()
  const email =  dados.filter((user:PostDataUser) => userEmail === user.email) 
if(email.length===0) {
  return null
}
  
  return email
}