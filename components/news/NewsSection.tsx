import { useTranslations } from "next-intl";
import { ReklamaList } from "../reklama/ReklamaList";
import { NewsLists } from "./NewsList";

export const NewsSection = () => {
  const t = useTranslations("NewsSection");
  return (
    <section className="py-16 md:py-32">
      <h1 className="font-bold text-2xl md:text-4xl md:text-start text-[#001561]">
        {t("header")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 mt-4">
        <div className="md:col-span-7">
          <NewsLists />
        </div>
        <div className="md:col-span-3">
          <ReklamaList />
        </div>
      </div>
    </section>
  );
};
