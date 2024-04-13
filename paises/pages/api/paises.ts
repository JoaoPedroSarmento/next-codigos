import { fetchPaises } from "@/src/services/paises";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  resp: NextApiResponse
) {
  const data = await fetchPaises();
  resp.status(200).json(data);
}
