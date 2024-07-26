import { LegislationPaginationController } from "@/components/legislation/LegislationPagination";
import { getDocums } from "@/db/queries";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("LegislationPage");

  return {
    title: t("metadata"),
  };
}

const LegistaionPage = async () => {
  const legislationData = getDocums();
  const [data] = await Promise.all([legislationData]);
  return (
    <section className="h-screen min-h-screen mt-24 p-2">
      <div className=" flex flex-col gap-y-8">
        <LegislationHeader />
        <LegislationPaginationController data={data} />
      </div>
    </section>
  );
};

export default LegistaionPage;

function LegislationHeader() {
  const t = useTranslations("LegislationPage");
  return (
    <h1 className="text-2xl text-center md:text-4xl font-extrabold text-black mt-12 ">
      {t("header")}
    </h1>
  );
}
