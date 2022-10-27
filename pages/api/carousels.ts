// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Carousel = {
  image: string;
  id: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Carousel[]>
) {
  res.status(200).json([
    {
      id: 1,
      image: "/frank.jpeg",
    },
    {
      id: 2,
      image: "/frank.jpeg",
    },
    {
      id: 3,
      image: "/frank.jpeg",
    },
  ]);
}
