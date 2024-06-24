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

export const getNewsSingle = cache(async (id: number) => {
  try {
    const data = await db.news.findUnique({
      where: {
        id: id,
      },
    });

    return data; // Return the fetched data
  } catch (error) {
    console.error(`Error fetching news item with id ${id}:`, error);
    throw new Error(`Failed to fetch news item with id ${id}`);
  }
});

export const getRequests = cache(async () => {
  const data = await db.request.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
});

export const getMember = cache(async (id: number) => {
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
