import { Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("MembershipSection");

  return {
    title: t("metaData"),
  };
}

const Membership = () => {
  const t = useTranslations("MembershipSection");
  return (
    <section className="mt-28 px-12 pb-12 max-w-7xl mx-auto flex flex-col ">
      <h1 className="text-2xl md:text-4xl font-semibold text-[#001561]">
        {t("title")}
      </h1>

      <ul className="list-disc pl-6 mt-4 items-start gap-y-4  text-black font-normal text-sm md:text-lg">
        <li>{t("order1")}</li>
        <li>{t("order2")}</li>
        <li>{t("order3")}</li>
        <li>{t("order4")}</li>
        <li>{t("order5")}</li>
        <li>{t("order6")}</li>
        <li>{t("order7")}</li>
        <li>{t("order8")}</li>
        <li>{t("order9")}</li>
      </ul>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-y-8">
        <h1 className="flex flex-col items-start text-start text-sm md:text-lg">
          {t("emergency")}
          <span className="underline">{t("email")}</span>
        </h1>

        <a href="./spisok.pdf">
          <Download className="h-6 w-6" />
        </a>
      </div>

      <h1 className="text-center font-semibold text-black text-sm md:text-lg mt-12  items-center justify-center">
        {t("text")}
      </h1>
    </section>
  );
};

export default Membership;
