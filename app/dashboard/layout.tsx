import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import "./main.css";
import NextTopLoader from "nextjs-toploader";
export const metadata = {
  title: "Dashboard",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <NextTopLoader color="#001561" showSpinner={false} />
        <DashboardSidebar />
        <div className="pl-[200px]">{children}</div>
      </body>
    </html>
  );
};

export default DashboardLayout;
