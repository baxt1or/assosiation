
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

type Props = {

    children: React.ReactNode
}

export const MobileMenu = ({ children }: Props) => {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger className="md:hidden">
                <Menu className="w-6 h-6 text-white font-medium" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="p-4 bg-[#001561] border-none outline-none">
                {children}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
