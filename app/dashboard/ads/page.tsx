import { AdsColumns } from "@/components/colums";
import { DataTable } from "@/components/DataTable";
import { AdsForm } from "@/components/Forms";
import { getAds } from "@/db/queries";

const AdsPageDahsbars = async () => {
  const data = await getAds();
  return (
    <div>
      <div className="max-w-5xl mx-auto mt-24">
        <h1 className="text-4xl font-bold text-black">Новости</h1>
        <DataTable columns={AdsColumns} data={data}>
          <AdsForm />
        </DataTable>
      </div>
    </div>
  );
};

export default AdsPageDahsbars;
