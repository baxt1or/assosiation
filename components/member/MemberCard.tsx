"use client";

import Image from "next/image";
import { createContext, PropsWithChildren, useContext } from "react";
import { Member } from "@prisma/client";

import { Link2, Mail, MapPin, Phone, ToyBrick } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

type MemberProps = PropsWithChildren & {
  post: Member;
};

const PostCardContext = createContext<MemberProps | undefined>(undefined);

function useMemberCardContext() {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error("useMemberCard must be used within a PostCardProvider");
  }
  return context;
}

export const MemberCard = ({ post, children }: MemberProps) => {
  return (
    <PostCardContext.Provider value={{ post }}>
      <div className="group">
        <div className="border border-neutral-900/15  bg-white rounded-3xl p-4 flex flex-col gap-y-2 shadow-sm transform duration-500 transition-all group-hover:scale-105">
          {children}
        </div>
      </div>
    </PostCardContext.Provider>
  );
};

export const MemberCardTitle = () => {
  const { post } = useMemberCardContext();
  return (
    <h1 className="text-center font-semibold text-[#001561] text-sm h-6 truncate">
      {post.title}
    </h1>
  );
};

export const MemberCardImgUrl = () => {
  const { post } = useMemberCardContext();
  return (
    <div className="relative h-[100px]">
      <Image
        src={`https://dogovrrhdhdtxaylejbb.supabase.co/storage/v1/object/public/images/${post.imgSrc}`}
        alt="logo"
        fill
        className=" object-contain"
      />
    </div>
  );
};

export const MemberCardDetails = () => {
  const { post } = useMemberCardContext();
  return (
    <div className="flex items-center gap-4 justify-center mt-2">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Phone className="w-5 h-5 text-muted-foreground" />
        </HoverCardTrigger>
        <HoverCardContent>{post.phone}</HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Mail className="w-5 h-5 text-muted-foreground" />
        </HoverCardTrigger>
        <HoverCardContent>{post.email}</HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Link2 className="w-5 h-5 text-muted-foreground" />
        </HoverCardTrigger>
        <HoverCardContent>{post.webLink}</HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <MapPin className="w-5 h-5 text-muted-foreground" />
        </HoverCardTrigger>
        <HoverCardContent>{post.address}</HoverCardContent>
      </HoverCard>
    </div>
  );
};
