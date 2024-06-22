import { DashboardSidebar } from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardSidebar />

      <div className="pl-[200px]">{children}</div>
    </>
  );
};

export default DashboardLayout;
