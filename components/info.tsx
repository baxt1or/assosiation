import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export const InfoAbout = () => {
  return (
    <section className="h-screen w-full bg-gray-50">
      <div className="max-w-7xl mx-auto h-full  items-center justify-center flex flex-col gap-y-8">
        <h1 className="text-4xl font-bold text-center">
          Полная информация о работе ассоциации
        </h1>

        <p className="text-md font-medium max-w-5xl mx-auto text-center text-muted-foreground">
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
      </div>
    </section>
  );
};
