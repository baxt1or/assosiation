import { getNews } from "@/db/queries";
import { NewsCard } from "./NewsCard";

export const NewsList = async () => {
  const newsData = getNews();
  const [news] = await Promise.all([newsData]);
  return (
    <section className="py-32">
      <h1 className="font-bold text-2xl md:text-4xl md:text-start text-[#001561] ">
        Поздние новости
      </h1>

      <div className="grid grid-cols-1W md:grid-cols-3 gap-4 mt-6">
        {news.slice(0, 3).map((item) => (
          <NewsCard
            key={item.id}
            imgSrc={item.imgSrc!}
            title={item.title}
            id={item.id}
            createdAt={item.createdAt}
          />
        ))}
      </div>
    </section>
  );
};
