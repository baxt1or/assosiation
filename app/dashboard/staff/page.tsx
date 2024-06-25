import { getStaffMembers } from "@/db/queries";
import { DataTable } from "@/components/DataTable";
import { StaffMembers } from "@/components/colums";
import { StaffForm } from "@/components/Forms";

const StaffMembersPage = async () => {
  const requestData = getStaffMembers();
  const [data] = await Promise.all([requestData]);

  return (
    <div className="mt-24 max-w-5xl mx-auto">
      <h1 className="text-4xl text-black font-extrabold">Рабочая Группа</h1>
      <DataTable data={data} columns={StaffMembers}>
        <StaffForm />
      </DataTable>
    </div>
  );
};

export default StaffMembersPage;
