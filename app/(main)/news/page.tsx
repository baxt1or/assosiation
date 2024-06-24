import { NewsPaginationController } from "@/components/NewsPaginationController";
import { getNews } from "@/db/queries";

export const metadata = {
  title: "Новости",
};

const NewsPage = async () => {
  const newsData = getNews();
  const [news] = await Promise.all([newsData]);

  return (
    <section className="h-auto  pb-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-8 pt-28 p-4">
        <h1 className="text-4xl font-semibold text-[#001561]">Новости</h1>
        <NewsPaginationController data={news} />
      </div>
    </section>
  );
};

export default NewsPage;
