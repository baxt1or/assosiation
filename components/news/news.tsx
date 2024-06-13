import { getNews } from "@/db/queries";
import Link from "next/link";
import React from "react";
import { NewsCard } from "../shared/news-card";

export const News = async () => {
  const newsData = getNews();
  const [news] = await Promise.all([newsData]);

  return (
    <section className="bg-gray-50 p-16 ">
      <div className="flex flex-col items-start gap-y-4 max-w-7xl mx-auto">
        <h1 className="font-bold text-4xl text-[#001561]">Поздние новости</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {news.slice(0, 3).map((nw) => (
            <NewsCard
              key={nw.id}
              imgSrc={nw.imgSrc!}
              title={nw.title}
              id={nw.id}
              createdAt={nw.createdAt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
