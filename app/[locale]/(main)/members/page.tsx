import {
  MemberCard,
  MemberCardDetails,
  MemberCardImgUrl,
  MemberCardTitle,
} from "@/components/member/MemberCard";
import { CompanyHeader } from "@/components/others/CompanyHeader";

import { getMembers } from "@/db/queries";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("CompanyPage");

  return {
    title: t("metadata"),
  };
}

const MembersPagination = async () => {
  const membersData = getMembers();
  const [data] = await Promise.all([membersData]);

  return (
    <section className="bg-white p-4 flex flex-col mt-28 h-full max-w-7xl mx-auto">
      <CompanyHeader />
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
