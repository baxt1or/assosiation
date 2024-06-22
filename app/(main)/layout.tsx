import { Footers } from "@/components/Footers";
import { Header } from "@/components/Navbar";

import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow ">{children}</main>
      <Footers />
    </div>
  );
};

export default MainLayout;
