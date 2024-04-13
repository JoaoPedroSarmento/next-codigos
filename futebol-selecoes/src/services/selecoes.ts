import { SelecaoType } from "../types/types";

export const fetchSelecoes = async () => {
  const data: SelecaoType[] = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/selecoes`
  ).then((resp) => resp.json());
  return data;
};

export const fetchSelecao = async (nome: string) => {
  const data: SelecaoType = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/selecoes/${nome}`
  ).then((resp) => resp.json());
  return data;
};
