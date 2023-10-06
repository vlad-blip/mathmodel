import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, category, thumbnail, content } = req.body;

  const news = await prisma.news.create({
    data: {
      title,
      category,
      thumbnail,
      content,
    },
  });

  res.status(200).json({ news });
}
