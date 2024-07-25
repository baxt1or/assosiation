import { RequestColumns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/DataTable";
import { getRequests } from "@/db/queries";

const RequestsPage = async () => {
  const requestData = getRequests();
  const [data] = await Promise.all([requestData]);

  return (
    <div className="mt-24 max-w-5xl mx-auto">
      <h1 className="text-4xl text-black font-extrabold">Запросы</h1>
      <DataTable data={data} columns={RequestColumns} />
    </div>
  );
};

export default RequestsPage;
