import { useTranslations } from "next-intl";

export const CompanyHeader = () => {
  const t = useTranslations("CompanyPage");
  return (
    <h1 className="text-4xl font-semibold text-[#001561]">{t("title")}</h1>
  );
};
