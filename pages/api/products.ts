// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getRandomProductFromDb } from "@/utils/getRandomProduct";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const products = [];
  for (let i = 0; i < 10; i++) {
    products.push(await getRandomProductFromDb());
  }
  res.status(200).json(products);
}
