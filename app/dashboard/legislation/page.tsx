import { DocumentColumns } from "@/components/colums";
import { DataTable } from "@/components/DataTable";
import { getDocuments } from "@/lib/queries";
import Link from "next/link";

const LegislationDashboardPage = async () => {
  const data = await getDocuments();
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
