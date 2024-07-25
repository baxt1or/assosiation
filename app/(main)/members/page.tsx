import {
  MemberCard,
  MemberCardDetails,
  MemberCardImgUrl,
  MemberCardTitle,
} from "@/components/member/MemberCard";
import { getMembers } from "@/db/queries";

const MembersPagination = async () => {
  const data = await getMembers();

  return (
    <section className="bg-white p-4 flex flex-col mt-28 h-full max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold text-[#001561]">Компании</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
        {data.map((member) => (
          <MemberCard post={member} key={member.id}>
            <MemberCardImgUrl />
            <MemberCardTitle />
            <MemberCardDetails />
          </MemberCard>
        ))}
      </div>
    </section>
  );
};

export default MembersPagination;
