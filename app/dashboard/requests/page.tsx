import { getRequests } from "@/db/queries";
import { DataTable } from "@/components/DataTable";
import { RequestColumns } from "@/components/colums";

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
