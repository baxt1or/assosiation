import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations("GuidancePage");

  return {
    title: t("metadata"),
  };
}

const DirectorsPage = () => {
  const t = useTranslations("GuidancePage");
  return (
    <div className="w-full h-auto bg-gray-50 pt-28">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  w-full h-full py-12 ">
            <div className="w-full h-full relative">
              <Image
                src={"/images/director.jpg"}
                alt="image"
                width={500}
                height={500}
                className="rounded-lg object-cover aspect-square"
              />
            </div>

            <div className="flex flex-col gap-y-8 mt-24 ml-2">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl text-black font-bold text-center">
                  {t("full_name1")}
                </h1>
                <p className="text-xl text-[#001561] font-semibold text-center flex flex-col gap-y-1">
                  <span className="text-2xl font-bold ">
                    {t("current_position1")}
                  </span>

                  {t("organization")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  w-full h-full py-12 ">
            <div className="w-full h-full relative">
              <Image
                src={"/images/ispol.jpg"}
                alt="image"
                width={500}
                height={500}
                className="rounded-lg object-cover aspect-square"
              />
            </div>

            <div className="flex flex-col gap-y-8 mt-24 ml-2">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl text-black font-bold text-center">
                  {t("full_name2")}
                </h1>
                <p className="text-xl text-[#001561] font-semibold text-center flex flex-col gap-y-1">
                  <span className="text-2xl font-bold ">
                    {t("current_position2")}
                  </span>
                  {t("organization")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsPage;
