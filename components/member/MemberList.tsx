import { getMembers } from "@/db/queries";
import { MemberCard, MemberCardImgUrl, MemberCardTitle } from "./MemberCard";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import MemberNavbar from "./MemberNavbar";

export const MembersList = async () => {
  const members = await getMembers();
  return (
    <section className="py-32">
      <MemberNavbar />
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
        {members.slice(0, 6).map((item) => (
          <MemberCard post={item} key={item.id}>
            <MemberCardImgUrl />
            <MemberCardTitle />
          </MemberCard>
        ))}
      </div>
    </section>
  );
};
