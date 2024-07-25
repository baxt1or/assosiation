import { DocumentColumns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/DataTable";
import { getDocums } from "@/db/queries";
import Link from "next/link";

const LegislationDashboardPage = async () => {
  const data = await getDocums();
  return (
    <div className="max-w-6xl mx-auto mt-24">
      <h1 className="text-4xl font-bold text-black">Компании</h1>
      <DataTable columns={DocumentColumns} data={data}>
        <Link
          href={"/dashboard/legislation/new-document"}
          className="p-3 text-sm bg-blue-500 text-white rounded-full"
        >
          Добавить
        </Link>
      </DataTable>
    </div>
  );
};

export default LegislationDashboardPage;
