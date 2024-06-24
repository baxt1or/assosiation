// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { getMembers } from "@/db/queries";
// import { buttonVariants } from "./ui/button";

// import { MemberCard } from "./MemberCard";

// export const MembersList = async () => {
//   const members = getMembers();
//   const [data] = await Promise.all([members]);
//   return (
//     <section className="pb-12">
//       <div className="flex items-center justify-between h-full">
//         <h1 className="text-2xl md:text-4xl font-bold text-[#001561]">
//           Компании
//         </h1>

//         <Link href={"/members"} className={cn(buttonVariants({ size: "sm" }))}>
//           Смотреть все
//         </Link>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
//         {data.slice(0, 6).map((item) => (
//           <MemberCard
//             key={item.id}
//             id={item.id}
//             imgSrc={item.imgSrc!}
//             title={item.title}
//             phoneNumber={item.phone}
//             webLink={item.webLink!}
//             email={item.email!}
//             address={item.address!}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

import Link from "next/link";
import { cn } from "@/lib/utils";
import { getMembers } from "@/db/queries";
import { buttonVariants } from "./ui/button";
import { MemberCard } from "./MemberCard";

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
          <MemberCard
            key={item.id}
            id={item.id}
            imgSrc={item.imgSrc!}
            title={item.title}
            phoneNumber={item.phone}
            webLink={item.webLink!}
            email={item.email!}
            address={item.address!}
          />
        ))}
      </div>
    </section>
  );
};
