"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MobileMenu } from "./mobile";

const links = [
  {
    title: "ГЛАВНАЯ",
    href: "/",
  },
  {
    title: "ОБ АССОЦИАЦИИ",
    href: "/about",
  },
  {
    title: "ЧЛЕНСТВО",
    href: "/membership",
  },
  {
    title: "НОВОСТИ",
    href: "/news",
  },
  {
    title: "ЗАКОНОДАТЕЛЬСТВО",
    href: "/law",
  },
  {
    title: "КОНТАКТЫ",
    href: "/contacts",
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed max-w-7xl mx-auto top-4 left-8 right-8 h-18 py-2 bg-[#001561] rounded-3xl  z-[1000] ">
      <nav className=" flex items-center justify-between px-2 pr-6">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={62} height={62} />
        </Link>

        <MobileMenu>
          <div className="flex flex-col gap-y-4 items-center justify-center ">
            {links.map((link, index) => (
              <Link key={link.href} href={link.href}>
                <p
                  className={cn(
                    pathname === link.href
                      ? "opacity-50"
                      : "text-bold text-white hover:opacity-50"
                  )}
                >
                  {link.title}
                </p>
              </Link>
            ))}
          </div>
        </MobileMenu>

        <div className="hidden md:flex items-center gap-8 ">
          <Link href={"/"} className="text-bold text-white hover:opacity-50">
            ГЛАВНАЯ
          </Link>

          <HoverCard>
            <HoverCardTrigger>
              <p className="text-bold text-white hover:opacity-50">
                ОБ АССОЦИАЦИИ
              </p>
            </HoverCardTrigger>

            <HoverCardContent className="flex flex-col w-auto gap-y-2 text-muted-foreground px-8 py-4 text-start  rounded-sm ">
              <Link href={"/about"} className="hover:text-black">
                Об Ассоциации
              </Link>

              <Link href={"/director"} className="hover:text-black">
                Руководство
              </Link>
            </HoverCardContent>
          </HoverCard>

          <Link
            href={"/membership"}
            className="text-bold text-white hover:opacity-50"
          >
            ЧЛЕНСТВО
          </Link>
          <Link
            href={"/news"}
            className="text-bold text-white hover:opacity-50"
          >
            НОВОСТИ
          </Link>
          <Link href={"/law"} className="text-bold text-white hover:opacity-50">
            ЗАКОНОДАТЕЛЬСТВО
          </Link>
          <Link
            href={"/contacts"}
            className="text-bold text-white hover:opacity-50"
          >
            КОНТАКТЫ
          </Link>

          {/* {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}>




                            <p className={cn(
                                pathname === link.href ? "text-white opacity-50" : "text-bold text-white hover:opacity-50"
                            )}
                            >
                                {link.title}
                            </p>

                        </Link>
                    ))} */}
        </div>
      </nav>
    </header>
  );
};
