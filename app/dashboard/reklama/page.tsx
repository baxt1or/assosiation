import { AdsColumns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/DataTable";
import { ReklamaForm } from "@/components/reklama/ReklamaForm";

import { getAds } from "@/db/queries";

const AdsPageDahsbars = async () => {
  const data = await getAds();
  return (
    <div>
      <div className="max-w-5xl mx-auto mt-24">
        <h1 className="text-4xl font-bold text-black">Новости</h1>
        <DataTable columns={AdsColumns} data={data}>
          <ReklamaForm />
        </DataTable>
      </div>
    </div>
  );
};

export default AdsPageDahsbars;
