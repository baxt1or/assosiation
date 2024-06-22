import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { DataTable } from "./DataTable";

export const DropDownMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden">
        <Menu className="w-6 h-6 text-white font-medium" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-4 bg-[#001561] border-none outline-none">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
