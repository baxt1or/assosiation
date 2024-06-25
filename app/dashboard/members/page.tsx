import React from "react";

import { getMembers } from "@/db/queries";
import { DataTable } from "@/components/DataTable";
import { MemberColums } from "@/components/colums";
import { MemberForm } from "@/components/Forms";

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
