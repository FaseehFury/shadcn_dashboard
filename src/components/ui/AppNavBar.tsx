import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {  Home, LogOut, Moon, Settings } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  



const AppNavBar = () => {
    return (
        <nav className="flex items-center justify-between">
CollapseButton
<div className="flex items-center gap-4">
    <Link href="/" className="">Dashboard</Link>
    <Moon />
    
<DropdownMenu>
  <DropdownMenuTrigger>
  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" className="w-[40px] w-[40px] rounded-full" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        <Home className="mr-2 h-[1.5rem] w-[1.5rem]"/>
        Home
    </DropdownMenuItem>
    <DropdownMenuItem>
        <Settings className="mr-2 h-[1.5rem] w-[1.5rem]"/>
        Settings
    </DropdownMenuItem>
    <DropdownMenuItem>
        <LogOut className="mr-2 h-[1.5rem] w-[1.5rem]"/>
        Logout
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


    </div>
        </nav>

    );
};

export default AppNavBar;