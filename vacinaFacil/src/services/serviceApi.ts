import axios from "axios";

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

// const api = axios.create({
//   url: "https://6722c0392108960b9cc576fc.mockapi.io",
//   headers: { "Content-Type": "application/json" },
// });

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


