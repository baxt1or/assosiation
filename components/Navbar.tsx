import Link from "next/link";
import Image from "next/image";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { ChevronDown } from "lucide-react";
import { DropDownMenu } from "./shared/DropDownmenu";
import LocalSwitcher from "./shared/Switcher";

export const links = [
  { title: "Главная", href: "/" },
  {
    title: "Об ассоциации",
    href: "/about",
    submenu: [
      { title: "Об ассоциации", href: "/about" },
      { title: "Руководство", href: "/director" },
    ],
  },
  {
    title: "Членство",
    href: "/membership",
    submenu: [
      { title: "Членство", href: "/membership" },
      { title: "Компании", href: "/members" },
    ],
  },
  { title: "Новости", href: "/news" },
  {
    title: "Законодательство",
    href: "/legislation",
  },
  { title: "Контакты", href: "/contacts" },
];

const NavigationLinks = () => (
  <>
    {links.map((link) =>
      link.submenu ? (
        <HoverCard key={link.title}>
          <HoverCardTrigger className="flex items-center gap-1 text-white text-bold  hover:opacity-50 uppercase cursor-pointer">
            <p>{link.title}</p>
            <ChevronDown className="h-5 w-5" />
          </HoverCardTrigger>
          <HoverCardContent className="flex flex-col w-auto gap-y-2 text-muted-foreground px-8 py-4 text-start rounded-sm">
            {link.submenu.map((sublink) => (
              <Link
                key={sublink.title}
                href={sublink.href}
                className="hover:text-black "
              >
                {sublink.title}
              </Link>
            ))}
          </HoverCardContent>
        </HoverCard>
      ) : (
        <Link
          key={link.title}
          href={link.href}
          className="text-bold text-white hover:opacity-50 uppercase"
        >
          {link.title}
        </Link>
      )
    )}
  </>
);

export const Header = () => {
  return (
    <header className="fixed top-4 left-8 right-8 h-18 py-2 bg-[#001561] rounded-3xl  z-[1000] ">
      <nav className=" flex items-center justify-between px-2 pr-6">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={62} height={62} />
        </Link>

        <DropDownMenu>
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <NavigationLinks />
          </div>
        </DropDownMenu>

        <div className="hidden md:flex items-center gap-8 ">
          <NavigationLinks />
        </div>
      </nav>
    </header>
  );
};
