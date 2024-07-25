import React from "react";

import { getMembers } from "@/db/queries";

import { MemberForm } from "@/components/member/MemberForm";
import { DataTable } from "@/components/data-table/DataTable";
import { MemberColums } from "@/components/data-table/columns";

const NewsDashboard = async () => {
  const data = await getMembers();

  return (
    <div className="max-w-5xl mx-auto mt-24">
      <h1 className="text-4xl font-bold text-black">Компании</h1>
      <DataTable columns={MemberColums} data={data}>
        <MemberForm />
      </DataTable>
    </div>
  );
};

export default NewsDashboard;
