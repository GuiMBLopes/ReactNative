import axios from "axios";
import { Cards } from "../@types/api";

interface PostData {
  rua: string;
  numero: string;
  bairro: string;
  cep: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
  horaInicio: string;
  horaFim: string;
  tipo: string;
}




export const inserir = async (data: PostData) => {
  try {
    const response = await axios.post(
      "https://6722c0392108960b9cc576fc.mockapi.io/vacina",
      data
    );
    console.log("Respota da API", response.data);
  } catch (error) {
    console.error("Erro ao fazer o POST", error);
  }
};

export const buscar = async () => {
  try {
    const response = await axios.get(
      "https://6722c0392108960b9cc576fc.mockapi.io/vacina"
    );
    console.log("Resposta API", response.data);
    const dadosGet = response.data;
    return separarCardsData(dadosGet)
  } catch (error) {
    console.log("Erro ao fazer o GET", error);
    return []
  }
};


const separarCardsData = (dadosGet: Cards[]) => {
const cardsData = dadosGet.map((card: Cards) => ({
  rua: card.rua,
  bairro: card.bairro,
  tipo: card.tipo,
  numero: card.numero,
  dataInicio: card.dataInicio,
  dataFim: card.dataFim,
  id: card.id
}));

const info:Cards[] = cardsData
return info

}


export const deletarApi = async (id:string) => {
  try {
    const response = await axios.delete(
      `https://6722c0392108960b9cc576fc.mockapi.io/vacina/${id}`
    );
    console.log("Deletou");
  } catch (error) {
    console.log("Erro ao fazer o Delete", error);
  }
}