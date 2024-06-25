import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DialogForm } from "./Dialog";
import { FormRequest } from "./Forms";

export const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <video
        src="/dos.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        id="myVideo"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="absolute h-full top-0 flex flex-col gap-y-4 justify-center items-start px-4 md:px-0 md:pl-20 md:w-1/2">
          <h1 className="text-center md:text-left text-[#001561] font-extrabold text-xl md:text-4xl">
            Ассоциация представительств иностранных фармацевтических компаний и
            производителей в Республике Узбекистан
          </h1>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/news"
              className={cn(
                buttonVariants({ size: "sm", variant: "secondary" }),
                "px-8 py-4 md:px-12 md:py-8 text-[#001561] font-semibold text-base md:text-lg w-full"
              )}
            >
              Новости
            </Link>
            <DialogForm
              label="Оставить заявку"
              className="px-8 py-4 md:px-12 md:py-8 bg-[#001561] text-white font-semibold text-base md:text-lg hover:bg-gray-500"
            >
              <FormRequest />
            </DialogForm>
          </div>
        </div>
      </div>
    </section>
  );
};
