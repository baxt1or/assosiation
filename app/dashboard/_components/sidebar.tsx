import Link from "next/link";
import React from "react";

const links = [
  {
    label: "Компании",
    href: "/dashboard/members",
  },
  {
    label: "Новости",
    href: "/dashboard/news",
  },
  {
    label: "Запросы",
    href: "/dashboard/requests",
  },
  {
    label: "О нас",
    href: "/dashboard/about",
  },
];

export const DashboardSidebar = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 w-[200px] bg-gray-50 z-[1000]">
      <div className="flex flex-col items-start justify-start p-6 gap-y-4 mt-[80px]">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <p className="text-xl font-bold text-black">{link.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
