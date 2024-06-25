import { Link2, Mail, MapPin, Phone, ToyBrick } from "lucide-react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type Props = {
  id: number;
  imgSrc: string;
  title: string;
  phoneNumber: string;
  webLink: string;
  email: string;
  address: string;
};

export const MemberCard = ({
  imgSrc,
  title,
  phoneNumber,
  email,
  webLink,
  address,
}: Props) => {
  return (
    <div className="group">
      <div className="border border-neutral-900/15  bg-white rounded-3xl p-4 flex flex-col gap-y-2 shadow-sm transform duration-500 transition-all group-hover:scale-105">
        <Image
          src={`https://dogovrrhdhdtxaylejbb.supabase.co/storage/v1/object/public/images/${imgSrc}`}
          alt="logo"
          width={100}
          height={100}
          className="w-full h-[100px] object-contain"
        />
        <h1 className="text-center font-semibold text-[#001561] text-sm h-6 ">
          {title}
        </h1>
      </div>
    </div>
  );
};
