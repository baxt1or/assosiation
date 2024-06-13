import Link from "next/link";
import { cn } from "@/lib/utils";
import { getMembers } from "@/db/queries";
import { buttonVariants } from "./ui/button";
import { MemberCard } from "./shared/member-card";

export const ListOfMembers = async () => {
  const data = getMembers();
  const [members] = await Promise.all([data]);

  return (
    <section className="w-full h-auto bg-gray-50 overflow-hidden p-14 ">
      <div className=" gap-y-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold text-[#001561]">Компании</h1>

          <Link href={"/members"} className={cn(buttonVariants())}>
            Смотреть все
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
          {members.slice(0, 6).map((member) => (
            <MemberCard
              key={member.id}
              imgSrc={member.imgSrc!}
              email={member.email!}
              phoneNumber={member.phone}
              webLink={member.webLink!}
              id={member.id}
              title={member.title}
              address={member.address!}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
