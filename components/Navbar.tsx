import Image from "next/image";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { ChevronDown } from "lucide-react";
import { DropDownMenu } from "./shared/DropDownmenu";
import LocalSwitcher from "./shared/Switcher";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

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

// const NavigationLinks = () => (
//   <>
//     {links.map((link) =>
//       link.submenu ? (
//         <HoverCard key={link.title}>
//           <HoverCardTrigger className="flex items-center gap-1 text-white text-bold  hover:opacity-50 uppercase cursor-pointer">
//             <p>{link.title}</p>
//             <ChevronDown className="h-5 w-5" />
//           </HoverCardTrigger>
//           <HoverCardContent className="flex flex-col w-auto gap-y-2 text-muted-foreground px-8 py-4 text-start rounded-sm">
//             {link.submenu.map((sublink) => (
//               <Link
//                 key={sublink.title}
//                 href={sublink.href}
//                 className="hover:text-black "
//               >
//                 {sublink.title}
//               </Link>
//             ))}
//           </HoverCardContent>
//         </HoverCard>
//       ) : (
//         <Link
//           key={link.title}
//           href={link.href}
//           className="text-bold text-white hover:opacity-50 uppercase"
//         >
//           {link.title}
//         </Link>
//       )
//     )}
//   </>
// );

export const Header = () => {
  const t = useTranslations("NavbarLinks");
  return (
    <header className="fixed top-4 left-8 right-8 h-18 py-2 bg-[#001561] rounded-3xl  z-[1000] ">
      <nav className=" flex items-center justify-between px-2 pr-6">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={62} height={62} />
        </Link>

        <DropDownMenu>
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <Link
              href={"/"}
              className="text-bold text-white hover:opacity-50 uppercase"
            >
              {t("home")}
            </Link>

            <HoverCard>
              <HoverCardTrigger className="flex items-center gap-1 text-white text-bold  hover:opacity-50 uppercase cursor-pointer">
                {t("about")}
                <ChevronDown className="h-5 w-5" />
              </HoverCardTrigger>

              <HoverCardContent className="flex flex-col w-auto gap-y-2 text-muted-foreground px-8 py-4 text-start rounded-sm">
                <Link href={"/about"} className="hover:text-black ">
                  {t("about")}
                </Link>
                <Link href={"/director"} className="hover:text-black ">
                  {t("guidence")}
                </Link>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger className="flex items-center gap-1 text-white text-bold  hover:opacity-50 uppercase cursor-pointer">
                {t("membership")}
                <ChevronDown className="h-5 w-5" />
              </HoverCardTrigger>

              <HoverCardContent className="flex flex-col w-auto gap-y-2 text-muted-foreground px-8 py-4 text-start rounded-sm">
                <Link href={"/membership"} className="hover:text-black ">
                  {t("membership")}
                </Link>
                <Link href={"/members"} className="hover:text-black ">
                  {t("members")}
                </Link>
              </HoverCardContent>
            </HoverCard>

            <Link
              href={"/news"}
              className="text-bold text-white hover:opacity-50 uppercase"
            >
              {t("news")}
            </Link>

            <Link
              href={"/legislation"}
              className="text-bold text-white hover:opacity-50 uppercase"
            >
              {t("legislation")}
            </Link>

            <Link
              href={"/contacts"}
              className="text-bold text-white hover:opacity-50 uppercase"
            >
              {t("contact")}
            </Link>

            <LocalSwitcher />
          </div>
        </DropDownMenu>

        <div className="hidden md:flex items-center gap-8 ">
          <Link
            href={"/"}
            className="text-bold text-white hover:opacity-50 uppercase"
          >
            {t("home")}
          </Link>

          <HoverCard>
            <HoverCardTrigger className="flex items-center gap-1 text-white text-bold  hover:opacity-50 uppercase cursor-pointer">
              {t("about")}
              <ChevronDown className="h-5 w-5" />
            </HoverCardTrigger>

            <HoverCardContent className="flex flex-col w-auto gap-y-2 text-muted-foreground px-8 py-4 text-start rounded-sm">
              <Link href={"/about"} className="hover:text-black ">
                {t("about")}
              </Link>
              <Link href={"/director"} className="hover:text-black ">
                {t("guidence")}
              </Link>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger className="flex items-center gap-1 text-white text-bold  hover:opacity-50 uppercase cursor-pointer">
              {t("membership")}
              <ChevronDown className="h-5 w-5" />
            </HoverCardTrigger>

            <HoverCardContent className="flex flex-col w-auto gap-y-2 text-muted-foreground px-8 py-4 text-start rounded-sm">
              <Link href={"/membership"} className="hover:text-black ">
                {t("membership")}
              </Link>
              <Link href={"/members"} className="hover:text-black ">
                {t("members")}
              </Link>
            </HoverCardContent>
          </HoverCard>

          <Link
            href={"/news"}
            className="text-bold text-white hover:opacity-50 uppercase"
          >
            {t("news")}
          </Link>

          <Link
            href={"/legislation"}
            className="text-bold text-white hover:opacity-50 uppercase"
          >
            {t("legislation")}
          </Link>

          <Link
            href={"/contacts"}
            className="text-bold text-white hover:opacity-50 uppercase"
          >
            {t("contact")}
          </Link>

          <LocalSwitcher />
        </div>
      </nav>
    </header>
  );
};
