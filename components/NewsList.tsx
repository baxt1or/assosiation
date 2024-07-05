import { getAds, getNews } from "@/db/queries";
import { NewsCard } from "./NewsCard";
import { Ads } from "./Ads";

export const NewsList = async () => {
  const newsData = getNews();
  const [news] = await Promise.all([newsData]);
  const adsData = getAds();
  const [data] = await Promise.all([adsData]);
  return (
    <section className="py-32">
      <h1 className="font-bold text-2xl md:text-4xl md:text-start text-[#001561] ">
        Поздние новости
      </h1>
      <div className="grid grid-cols-10 gap-4 mt-8">
        <div className="col-span-7">
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
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1W md:grid-cols-1 gap-4 mt-6">
            {data.slice(0, 2).map((item) => (
              <Ads content={item.content} imgSrc={item.imgSrc} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
