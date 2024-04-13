import { fetchPaises } from "@/src/services/paises";
import { NextApiRequest, NextApiResponse } from "next";
import { PaisInformacoes } from "@/src/types/paises";

export default async function handler(
  req: NextApiRequest,
  resp: NextApiResponse
) {
  const { nome } = req.query;
  const paises: Array<PaisInformacoes> = await fetchPaises();
  const pais: PaisInformacoes | undefined = paises.find(
    (pais) => pais.name.common == nome
  );
  resp.status(200).json(pais);
}
