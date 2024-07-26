import { cn } from "@/lib/utils";

import React from "react";
import { buttonVariants } from "./ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const About = () => {
  const t = useTranslations("AboutSection");
  return (
    <section className="flex flex-col gap-y-8 items-center justify-center py-32">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        {t("title")}
      </h1>

      <p className="text-sm font-medium text-center text-muted-foreground max-w-5xl mx-auto">
        {t("content")}
      </p>

      <Link
        href={"/about"}
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        {t("button")}
      </Link>
    </section>
  );
};
