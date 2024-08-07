import { NewsColumns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/DataTable";
import { getNews } from "@/db/queries";

import Link from "next/link";

const NewsPage = async () => {
  const newsData = getNews();
  const [data] = await Promise.all([newsData]);
  return (
    <div className="max-w-5xl mx-auto mt-24">
      <h1 className="text-4xl font-bold text-black">Новости</h1>
      <DataTable columns={NewsColumns} data={data}>
        <Link
          href={"/dashboard/news/new-news"}
          className="p-3 text-sm bg-blue-500 text-white rounded-full"
        >
          Добавить
        </Link>
      </DataTable>
    </div>
  );
};

export default NewsPage;
