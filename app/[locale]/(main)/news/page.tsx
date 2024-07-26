import { NewsPaginationController } from "@/components/news/NewsPaginationController";
import { NewsHeader } from "@/components/others/NewsHeader";
import { getNews } from "@/db/queries";

import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("NewsPage");

  return {
    title: t("metadata"),
  };
}

const NewsPage = async () => {
  const newsData = getNews();
  const [news] = await Promise.all([newsData]);

  return (
    <section className="h-auto  pb-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-8 pt-28 p-4">
        <NewsHeader />
        <NewsPaginationController data={news} />
      </div>
    </section>
  );
};

export default NewsPage;
