import { NextApiRequest, NextApiResponse } from "next";
import selecoes from "@/database.json";

export default function handler(req: NextApiRequest, resp: NextApiResponse) {
  const { nome } = req.query;
  const selecao = selecoes.find((sele) => sele.nome === nome);
  resp.status(200).json(selecao);
}
