import { DashboardSidebar } from "@/components/dashboard/Sidebar";

export const metadata = {
  title: "Dashboard",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardSidebar />

      <div className="pl-[200px]">{children}</div>
    </>
  );
};

export default DashboardLayout;
