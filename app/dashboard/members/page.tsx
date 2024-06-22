import React from "react";

import { getMembers } from "@/db/queries";
import { createMember } from "@/actions/members";
import { Button } from "@/components/ui/button";
import { DialogForm } from "@/components/shared/dialog";
import { DataTable } from "@/components/DataTable";
import { MemberColums } from "@/components/colums";

const NewsDashboard = async () => {
  const data = await getMembers();

  return (
    <div className="max-w-5xl mx-auto mt-24">
      <h1 className="text-4xl font-bold text-black">Компании</h1>
      <DataTable columns={MemberColums} data={data}>
        <DialogForm label="Добавить">
          <form action={createMember}>
            <div className="w-full flex flex-col items-center gap-y-4">
              <label className="text-center text-4xl font-bold text-black">
                {" "}
                Добавить
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="p-4 w-full rounded-3xl border-gray-500 border"
              />
              <input
                type="text"
                name="webLink"
                placeholder="Website Link"
                className="p-4 w-full rounded-3xl border-gray-500 border"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="p-4 w-full rounded-3xl border-gray-500 border"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="p-4 w-full rounded-3xl border-gray-500 border"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="p-4 w-full rounded-3xl border-gray-500 border"
              />
              <input type="file" name="imgSrc" />

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

export default NewsDashboard;
