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

export const getStaffMembers = cache(async () => {
  const data = await db.faculty.findMany({});
  return data;
});

export const getAboutsData = cache(async () => {
  const data = await db.about.findMany({});
  return data;
});
