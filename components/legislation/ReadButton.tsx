import { useTranslations } from "next-intl";

export const ReadButton = () => {
  const t = useTranslations("ButtonComponent");

  return <p>{t("readButton")}</p>;
};
