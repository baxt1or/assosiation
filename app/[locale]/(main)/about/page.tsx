import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("About");

  return {
    title: t("metaData"),
  };
}

const AboutPage = () => {
  const t = useTranslations("AboutPage");
  return (
    <div className="max-w-7xl mx-auto mt-6 pt-24 pb-12 px-4">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-lg md:text-4xl font-semibold text-center text-[#001561]">
          {t("title")}
        </h1>

        <div className="grid grid-cols-1 gap-4 text-sm md:text-lg text-center text-gray-700 font-normal">
          <p>{t("h1")}</p>
          <p>{t("h2")}</p>

          <p>{t("h3")}</p>

          <p>{t("h4")}</p>

          <p>{t("h5")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
