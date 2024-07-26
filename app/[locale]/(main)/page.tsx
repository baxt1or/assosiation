import MainLayout from "@/components/MainLayout";
import Wraper from "@/components/Wraper";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("IndexPage");

  return {
    title: t("metadata"),
  };
}

const HomePage = () => {
  return <Wraper />;
};

export default HomePage;
