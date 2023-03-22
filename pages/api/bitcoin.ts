// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  response: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await fetch(
    "https://query2.finance.yahoo.com/v8/finance/chart/CS"
  );
  const response = await data.json();

  res.status(200).json({ response });
}
