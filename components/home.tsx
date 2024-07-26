import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

import { RequestForm } from "./request/RequestForm";
import { DialogForm } from "./shared/Dialog";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const Home = () => {
  const t = useTranslations("IndexPage");
  const tr = useTranslations("RequestFormSection");
  return (
    <section className="w-full h-screen relative min-h-screen">
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
            {t("title")}
          </h1>
          <div className="flex items-center justify-center gap-4 ml-3 md:ml-0">
            <Link
              href={"/news"}
              className={cn(
                buttonVariants({ size: "sm", variant: "secondary" }),
                "px-8 py-4 md:px-12 md:py-8 text-[#001561] font-semibold text-base md:text-lg w-full"
              )}
            >
              {t("button")}
            </Link>
            <DialogForm
              label={t("request")}
              className="px-8 py-4 md:px-12 md:py-8 bg-[#001561] text-white font-semibold text-base md:text-lg hover:bg-gray-500"
            >
              <RequestForm
                header={tr("header")}
                full_name={tr("full_name")}
                occupation={tr("occupation")}
                company_name={tr("company_name")}
                email={tr("header")}
                phone_number={tr("phone_number")}
                saveButton={tr("saveButton")}
              />
            </DialogForm>
          </div>
        </div>
      </div>
    </section>
  );
};
