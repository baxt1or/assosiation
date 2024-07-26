import RegisterForm from "@/components/dashboard/RegisterForm";
import { UserDataColums } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/DataTable";
import { getUsers } from "@/db/queries";
import React from "react";

const DashboardUsersPage = async () => {
  const data = await getUsers();
  return (
    <div className="mt-24 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-black font-extrabold">Пользователь</h1>

        <RegisterForm />
      </div>

      <DataTable data={data} columns={UserDataColums} />
    </div>
  );
};

export default DashboardUsersPage;
