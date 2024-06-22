import { MemberCard } from "@/components/MemberCard";
import { getMembers } from "@/db/queries";

const MembersPagination = async () => {
  const data = await getMembers();

  return (
    <section className="bg-white p-4 flex flex-col mt-28 h-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
        {data.map((member) => (
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
    </section>
  );
};

export default MembersPagination;
