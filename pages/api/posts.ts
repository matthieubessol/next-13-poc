// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Post = {
  title: string;
  id: number;
  url: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json([
    {
      id: 1,
      title: "Article 1",
      url: "/post/1",
    },
    {
      id: 2,
      title: "Article 2",
      url: "/post/2",
    },
  ]);
}
