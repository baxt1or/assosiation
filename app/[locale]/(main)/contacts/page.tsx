import { AboutData } from "@/components/about/AboutData";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("ContactsPage");

  return {
    title: t("metadata"),
  };
}

const ContactsPage = () => {
  const t = useTranslations("ContactsPage");
  return (
    <section className="mt-28 px-12 pb-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-[#001561] text-center md:text-start">
        {t("header")}
      </h1>
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-32 mt-12 gap-y-8 md:gap-y-0">
        <div className="space-y-8">
          <div className="flex flex-col gap-y-2 text-center md:text-left">
            <h1 className="text-md font-bold">{t("full_name1")}</h1>
            <h2 className="text-sm font-semibold text-gray-900">
              {t("current_position1")}
            </h2>
            <p className="flex items-center gap-2 text-sm text-black font-normal justify-center md:justify-start">
              <Phone className="h-4 w-4" aria-label="Phone icon" />
              +998 97 330 55 05
            </p>
          </div>

          <div className="flex flex-col gap-y-2 text-center md:text-left">
            <h1 className="text-md font-bold">{t("full_name2")}</h1>
            <h2 className="text-sm font-semibold text-gray-900">
              {t("current_position2")}
            </h2>
            <p className="flex items-center gap-2 text-sm text-black font-normal justify-center md:justify-start">
              <Phone className="h-4 w-4" aria-label="Phone icon" />
              +998 90 924 07 98
            </p>
          </div>
        </div>

        <AboutData />
      </div>
    </section>
  );
};

export default ContactsPage;
