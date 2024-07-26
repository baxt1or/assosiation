import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import "./main.css";
import NextTopLoader from "nextjs-toploader";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { SidebarNavbar } from "@/components/dashboard/SidebarNavbar";
export const metadata = {
  title: "Dashboard",
};

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  console.log(session);

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
