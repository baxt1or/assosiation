import { getStaffMembers } from "@/db/queries";
import { DataTable } from "@/components/DataTable";
import { StaffMembers } from "@/components/colums";
import { DialogForm } from "@/components/Dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createStaffMember } from "@/actions/staff";

const StaffMembersPage = async () => {
  const requestData = getStaffMembers();
  const [data] = await Promise.all([requestData]);

  return (
    <div className="mt-24 max-w-5xl mx-auto">
      <h1 className="text-4xl text-black font-extrabold">Staff Members</h1>
      <DataTable data={data} columns={StaffMembers}>
        <DialogForm label="Добавить">
          <form action={createStaffMember}>
            <div className="w-full flex flex-col items-center gap-y-6">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                className="p-4 w-full rounded-3xl"
              />

              <Input
                name="position"
                placeholder="Position"
                className="p-4 w-full rounded-3xl"
              />
              <Input
                name="companyName"
                placeholder="Position"
                className="p-4 w-full rounded-3xl"
              />

              <Button
                type="submit"
                className="w-full font-bold text-lg bg-[#001561] text-white hover:bg-gray-500"
              >
                Save
              </Button>
            </div>
          </form>
        </DialogForm>
      </DataTable>
    </div>
  );
};

export default StaffMembersPage;
