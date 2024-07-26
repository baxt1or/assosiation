import db from "@/db/db";
import { cache } from "react";

export const getSingleNews = cache(async (newsId: string) => {
  const data = await db.news.findUnique({
    where: {
      id: newsId,
    },
  });

  return data;
});
