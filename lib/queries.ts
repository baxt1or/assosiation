import db from "@/db/db";
import { cache } from "react";

export const getDocuments = cache(async () => {
  const data = await db.documents.findMany({});
  return data;
});

export const getDocument = cache(async (documentId: string) => {
  const data = await db.documents.findUnique({
    where: {
      id: documentId,
    },
  });

  return data;
});

export const getSingleNews = cache(async (newsId: string) => {
  const data = await db.news.findUnique({
    where: {
      id: newsId,
    },
  });

  return data;
});
