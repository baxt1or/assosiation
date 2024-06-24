import { Footers } from "@/components/Footers";
import { Header } from "@/components/Navbar";

export const metadata = {
  title:
    "Ассоциация представительств иностранных фармацевтических компаний и производителей в Республике Узбекистан",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footers />
    </div>
  );
};

export default MainLayout;
