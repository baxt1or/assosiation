import { AdsList } from "./AdsList";
import { NewsLists } from "./NewsLists";

export const NewsSection = () => {
  return (
    <section className="py-16 md:py-32">
      <h1 className="font-bold text-2xl md:text-4xl md:text-start text-[#001561]">
        Поздние новости
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 mt-8">
        <div className="md:col-span-7">
          <NewsLists />
        </div>
        <div className="md:col-span-3">
          <AdsList />
        </div>
      </div>
    </section>
  );
};
