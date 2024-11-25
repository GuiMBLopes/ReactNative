import axios from "axios";
import { Cards, DataCardPage, PostData } from "../@types/api";

export const inserir = async (data: PostData) => {
  try {
    const response = await axios.post(
      "https://6722c0392108960b9cc576fc.mockapi.io/vacina",
      data
    );
  } catch (error) {
    console.error("Erro ao fazer o POST", error);
  }
};

export const buscar = async () => {
  try {
    const response = await axios.get(
      "https://6722c0392108960b9cc576fc.mockapi.io/vacina"
    );
    const dadosGet = response.data;
    return separarCardsData(dadosGet);
  } catch (error) {
    console.log("Erro ao fazer o GET", error);
    return [];
  }
};

export const listar = async () => {
  try {
    const response = await axios.get(
      "https://6722c0392108960b9cc576fc.mockapi.io/vacina"
    );
    const dadosGet = response.data;
    return cardPagesData(dadosGet);
  } catch (error) {
    console.log("Erro ao fazer o GET", error);
    return [];
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
    id: card.id,
  }));
  const info: Cards[] = cardsData;
  return info;
};

const cardPagesData = (dadosGet: DataCardPage[]) => {
  const data = dadosGet.map((data: DataCardPage) => ({
    rua: data.rua,
    numero: data.numero,
    bairro: data.bairro,
    descricao: data.descricao,
    dataInicio: data.dataInicio,
    dataFim: data.dataFim,
    horaInicio: data.horaInicio,
    horaFim: data.horaFim,
    tipo: data.tipo,
    id: data.id,
  }));

  const info: DataCardPage[] = data;
  return info;
};

export const deletarApi = async (id: string) => {
  try {
    const response = await axios.delete(
      `https://6722c0392108960b9cc576fc.mockapi.io/vacina/${id}`
    );
  } catch (error) {
    console.log("Erro ao fazer o Delete", error);
  }
};
