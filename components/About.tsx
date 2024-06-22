import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export const About = () => {
  return (
    <section className="flex flex-col gap-y-8 items-center justify-center h-full my-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Полная информация о работе ассоциации
      </h1>

      <p className="text-sm font-medium text-center text-muted-foreground max-w-5xl mx-auto">
        Ассоциация Представительств Иностранных Фармацевтических Компаний и
        Производителей Республики Узбекистан является негосударственной
        некоммерческой организацией и представляет на рынке Узбекистана
        профессиональные и деловые интересы международных фармацевтических
        компаний-производителей оригинальных фармацевтических препаратов и
        медицинского оборудования.
      </p>

      <Link
        href={"/about"}
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        Подробнее
      </Link>
    </section>
  );
};
