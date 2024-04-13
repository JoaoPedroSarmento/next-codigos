import { NextApiRequest, NextApiResponse } from "next";
import selecoes from "@/database.json";
import { CacheHandler } from "next/dist/server/lib/incremental-cache";
export default function handler(
  req: NextApiRequest,
  resp: NextApiResponse
) {
  resp.status(200).json(selecoes);
}
