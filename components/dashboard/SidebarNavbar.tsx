import Link from "next/link";
import { LogoutButton } from "./user/LogoutButton";

export const SidebarNavbar = () => {
  return (
    <header className="fixed top-0 left-[200px] right-0 z-10 bg-white border-b">
      <nav className="p-4 flex items-center justify-between">
        <Link
          href={"/en"}
          className="text-lg font-normal text-blue-400 hover:underline hover:text-blue-600"
        >
          Главную страницу
        </Link>
        <LogoutButton />
      </nav>
    </header>
  );
};
