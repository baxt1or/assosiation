import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import "./main.css";
import NextTopLoader from "nextjs-toploader";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { SidebarNavbar } from "@/components/dashboard/SidebarNavbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Ассоциация Представительств Иностранных Фармацевтических Компаний и Производителей Республики Узбекистан является негосударственной некоммерческой организацией и представляет на рынке Узбекистана профессиональные и деловые интересы международных фармацевтических компаний-производителей оригинальных фармацевтических препаратов и медицинского оборудования",
  icons: {
    icon: "/logo.png",
  },
};
const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) {
    redirect("/auth/sign-in");
  }
  return (
    <html>
      <body>
        <NextTopLoader color="#001561" showSpinner={false} />
        <DashboardSidebar />
        <SidebarNavbar />
        <div className="pl-[200px]">{children}</div>
      </body>
    </html>
  );
};

export default DashboardLayout;
