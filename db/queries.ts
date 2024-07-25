import { cache } from "react";
import db from "./db";
import { assert } from "console";

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

export const getNewsSingle = cache(async (newsId: string) => {
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

export const getMember = cache(async (id: string) => {
  const data = await db.member.findUnique({
    where: {
      id: id,
    },
  });

  return data;
});

export const getStaffMembers = cache(async () => {
  const data = await db.faculty.findMany({});
  return data;
});

export const getAboutsData = cache(async () => {
  const data = await db.about.findMany({});
  return data;
});

export const getAds = cache(async () => {
  const data = await db.ads.findMany();
  return data;
});

export const getDocums = cache(async () => {
  const data = await db.document.findMany();
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
