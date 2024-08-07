"use client";

import { cn } from "@/lib/utils";
import {
  BookMarked,
  File,
  FileDownIcon,
  Home,
  InfoIcon,
  Newspaper,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LogoutButton } from "./user/LogoutButton";
import Image from "next/image";

export const links = [
  {
    label: "Компании",
    href: "/dashboard/members",
    icon: <Home />,
  },
  {
    label: "Новости",
    href: "/dashboard/news",
    icon: <Newspaper />,
  },
  {
    label: "Запросы",
    href: "/dashboard/requests",
    icon: <File />,
  },
  {
    label: "Реклама",
    href: "/dashboard/reklama",
    icon: <BookMarked />,
  },
  {
    label: "Закон",
    href: "/dashboard/legislation",
    icon: <FileDownIcon />,
  },
  {
    label: "О нас",
    href: "/dashboard/about",
    icon: <InfoIcon />,
  },
  {
    label: "Пользователь",
    href: "/dashboard/users",
    icon: <User />,
  },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 bottom-0 left-0 w-[200px] bg-gray-50 z-[1000] flex flex-col items-start gap-y-6 h-full px-4 pt-12">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <div
            key={link.href}
            className="flex gap-2 items-center justify-center"
          >
            <p className="text-md font-medium text-black h-5 w-5 mr-2">
              {Icon}
            </p>
            <Link
              href={link.href}
              className={cn(
                "text-xl font-bold text-black mt-2 hover:opacity-50",
                pathname == link.href && "text-gray-500"
              )}
            >
              {link.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
