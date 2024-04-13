import { PaisInformacoes } from "../types/paises";

export const fetchPaises = async () => {
  const data: Array<PaisInformacoes> = await fetch(
    "https://restcountries.com/v3.1/all"
  ).then((resp) => resp.json());
  return data;
};

export const fetchPais = async (nome: string) => {
  const data: PaisInformacoes = await fetch(
    `http://localhost:3000/api/paises/${nome}`
  ).then((resp) => {
    return resp.json();
  });
  return data;
};
