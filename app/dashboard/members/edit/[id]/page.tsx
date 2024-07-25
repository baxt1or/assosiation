import { updateMember } from "@/actions/members";
import { Button } from "@/components/ui/button";

import { getMember } from "@/db/queries";

import React from "react";

const MemberIdPage = async ({ params }: { params: { id: string } }) => {
  const member = await getMember(params.id);
  if (!member) {
    return;
  }
  const onSubmit = updateMember.bind(null, member?.id);

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <form action={onSubmit}>
        <div className="w-full flex flex-col items-center gap-y-4">
          <label className="text-center text-4xl font-bold text-black">
            {" "}
            Edit
          </label>
          <input
            defaultValue={member.title}
            type="text"
            name="title"
            placeholder="Title"
            className="p-4 w-full rounded-3xl border-gray-500 border"
          />
          <input
            defaultValue={member.webLink!}
            type="text"
            name="webLink"
            placeholder="Website Link"
            className="p-4 w-full rounded-3xl border-gray-500 border"
          />
          <input
            defaultValue={member.email!}
            type="text"
            name="email"
            placeholder="Email"
            className="p-4 w-full rounded-3xl border-gray-500 border"
          />
          <input
            defaultValue={member.address!}
            type="text"
            name="address"
            placeholder="Address"
            className="p-4 w-full rounded-3xl border-gray-500 border"
          />
          <input
            defaultValue={member.phone}
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="p-4 w-full rounded-3xl border-gray-500 border"
          />

          <Button
            type="submit"
            className="w-full font-bold text-lg bg-[#001561] text-white hover:bg-gray-500"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MemberIdPage;
