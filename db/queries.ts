import { cache } from "react";
import db from "./db";

export const getMembers = cache(async () => {
  const data = await db.member.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
});

export const getNews = cache(async () => {
  const data = await db.news.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
});

export const getNewsSingle = cache(async (id: string) => {
  const data = await db.news.findUnique({
    where: {
      id: id,
    },
  });

  return data;
});

export const getRequests = cache(async () => {
  const data = await db.request.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
});

export const getMember = cache(async (id: string) => {
  const data = await db.member.findUnique({
    where: {
      id: id,
    },
  });

  return data;
});

export type Member = {
  id: string;
  title: string;
  imgSrc: string | null;
  webLink: string | null;
  email: string | null;
  phone: string;
  address: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type MembersResponse = {
  data: Member[];
  total: number;
};

export const getMemberses = cache(
  async (page = 1, limit = 10): Promise<MembersResponse> => {
    const offset = (page - 1) * limit;

    const [data, total] = await Promise.all([
      db.member.findMany({
        orderBy: { createdAt: "desc" },
        skip: offset,
        take: limit,
      }),
      db.member.count(),
    ]);

    return { data, total };
  }
);
