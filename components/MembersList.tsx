import Link from "next/link";
import { cn } from "@/lib/utils";
import { getMembers } from "@/db/queries";
import { buttonVariants } from "./ui/button";
import { MemberCard, MemberCardImgUrl, MemberCardTitle } from "./MemberCard";

export const MembersList = async () => {
  const members = await getMembers();
  return (
    <section className="py-32">
      <div className="flex items-center justify-between h-full">
        <h1 className="text-2xl md:text-4xl font-bold text-[#001561]">
          Компании
        </h1>
        <Link href={"/members"} className={cn(buttonVariants({ size: "sm" }))}>
          Смотреть все
        </Link>
      </div>

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
