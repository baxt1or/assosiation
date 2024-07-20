import { getNews } from "@/db/queries";
import React from "react";
import { NewsCard } from "./NewsCard";

export const NewsLists = async () => {
  const newsData = getNews();
  const [news] = await Promise.all([newsData]);
  return (
    <div className="grid grid-cols-1W md:grid-cols-3 gap-4 mt-6">
      {news.slice(0, 6).map((item) => (
        <NewsCard
          key={item.id}
          imgSrc={item.imgSrc!}
          title={item.title}
          id={item.id}
          createdAt={item.createdAt}
          content={item.content}
        />
      ))}
    </div>
  );
};
