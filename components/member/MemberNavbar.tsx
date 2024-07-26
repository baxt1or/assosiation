import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";
import { buttonVariants } from "../ui/button";

const MemberNavbar = () => {
  const t = useTranslations("CompaniesSection");
  return (
    <div className="flex items-center justify-between h-full">
      <h1 className="text-2xl md:text-4xl font-bold text-[#001561]">
        {t("header")}
      </h1>
      <Link href={"/members"} className={cn(buttonVariants({ size: "sm" }))}>
        {t("buttonLink")}
      </Link>
    </div>
  );
};

export default MemberNavbar;
