import { MemberCard } from "@/components/shared/member-card";
import { getMembers } from "@/db/queries";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const MembersPage = async () => {
  const data = getMembers();
  const [members] = await Promise.all([data]);

  return (
    <section className="h-auto w-full bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col pt-28 ">
        <h1 className="text-4xl font-bold text-[#001561]">Компании</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              id={member.id}
              title={member.title}
              imgSrc={member.imgSrc!}
              webLink={member.webLink!}
              email={member.email!}
              phoneNumber={member.phone}
              address={member.address!}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersPage;
