import { cache } from "react";
import db from "./db";

export const getMembers = cache(async () => {
  const data = await db.member.findMany({
    orderBy: {
      createdAt: "asc",
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

export const getNews = cache(async () => {
  const data = await db.news.findMany({
    orderBy: {
      createdAt: "desc",
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

export const getRequests = cache(async () => {
  const data = await db.request.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
});

export const getAboutsData = cache(async () => {
  const data = await db.about.findMany({});
  return data;
});

export const getAboutDataById = cache(async (aboutId: string) => {
  const data = await db.about.findUnique({
    where: {
      id: aboutId,
    },
  });

  return data;
});

export const getAds = cache(async () => {
  const data = await db.ads.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
});

export const getDocums = cache(async () => {
  const data = await db.document.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
});

export const getDocum = cache(async (documentId: string) => {
  const data = await db.document.findUnique({
    where: {
      id: documentId,
    },
  });
  return data;
});

export const getUsers = cache(async () => {
  const data = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
});

export const getUserByEmail = async (email: string) => {
  const data = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  return data;
};

export const getUserById = async (userId: string) => {
  const data = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  return data;
};
