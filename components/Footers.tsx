import Image from "next/image";
import { links } from "./Navbar";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { AboutData } from "./about/AboutData";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const navigations = [
  { title: "Об Ассоциации", href: "/about" },
  { title: "Руководство", href: "/director" },
  { title: "Рабочая Группа", href: "/faculty" },
  { title: "Компании", href: "/members" },
];

export const Footers = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="text-white bg-[#001561] pt-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 bg-[#001561]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="logo" width={54} height={54} />
              <p className="text-xs max-w-xs text-center md:text-left">
                {t("title")}
              </p>
            </div>

            <AboutData />
          </div>

          <div className="hidden md:flex flex-col gap-y-2 items-center md:items-start">
            <h1 className="text-lg font-bold">{t("about")}</h1>

            <Link
              href={"/about"}
              className="text-xs font-medium text-white hover:underline"
            >
              {t("aboutLink")}
            </Link>
            <Link
              href={"/director"}
              className="text-xs font-medium text-white hover:underline"
            >
              {t("guidence")}
            </Link>

            <Link
              href={"/members"}
              className="text-xs font-medium text-white hover:underline"
            >
              {t("members")}
            </Link>
          </div>

          <div className="hidden md:flex flex-col gap-y-2 items-center md:items-start">
            <h1 className="text-lg font-bold">{t("navigation")}</h1>

            <Link
              href={"/"}
              className="text-xs font-medium text-white hover:underline"
            >
              {t("home")}
            </Link>

            <Link
              href={"/membership"}
              className="text-xs font-medium text-white hover:underline"
            >
              {t("membership")}
            </Link>
            <Link
              href={"/news"}
              className="text-xs font-medium text-white hover:underline"
            >
              {t("news")}
            </Link>

            <Link
              href={"/legislation"}
              className="text-xs font-medium text-white hover:underline"
            >
              {t("legislation")}
            </Link>

            <Link
              href={"/contacts"}
              className="text-xs font-medium text-white hover:underline"
            >
              {t("contact")}
            </Link>
          </div>

          <div className="hidden md:flex flex-col gap-4 items-center">
            <p className="text-lg font-bold">{t("social")}</p>
            <div className="flex items-center gap-2 justify-center">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t py-3 mt-4 max-w-7xl mx-auto px-8 border-gray-50">
        <div className="flex items-center justify-between">
          <p className="text-center md:text-left text-sm">
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
          <p className="text-sm font-normal">
            {t("developer")}{" "}
            <span className="text-gray-300">{t("engineer")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
