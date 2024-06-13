import { getNews } from "@/db/queries";
import Link from "next/link";
import React from "react";
import { NewsCard } from "../shared/news-card";

export const News = async () => {
  const newsData = getNews();
  const [news] = await Promise.all([newsData]);

  return (
    <section className="bg-gray-50 p-4">
      <div className=" max-w-7xl mx-auto flex flex-col gap-y-8  py-6">
        <h1 className="font-bold text-4xl text-[#001561] text-start">
          Поздние новости
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 ">
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
