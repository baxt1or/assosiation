import { getNews } from "@/db/queries";
import { DataTable } from "@/components/DataTable";
import { NewsColumns } from "@/components/colums";
import { NewsForm } from "@/components/Forms";

const NewsPage = async () => {
  const newsData = getNews();
  const [data] = await Promise.all([newsData]);
  return (
    <div className="max-w-5xl mx-auto mt-24">
      <h1 className="text-4xl font-bold text-black">Новости</h1>
      <DataTable columns={NewsColumns} data={data}>
        <NewsForm />
      </DataTable>
    </div>
  );
};

export default NewsPage;
