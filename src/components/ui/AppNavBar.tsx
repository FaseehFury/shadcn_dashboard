"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {  Home, LogOut, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { SquareMenu } from 'lucide-react';
import { Button } from "./button";
import { useTheme } from "next-themes";
import { SidebarTrigger, useSidebar } from "./sidebar";







const AppNavBar = () => {
  
  const {theme,setTheme } = useTheme()
  const {toggleSidebar} = useSidebar();
    return (
        <nav className="p-4 flex items-center justify-between">
{/* CollapseButton */}
{/* <SidebarTrigger /> */}

<Button variant="outline" onClick={toggleSidebar}>
  Toggler
</Button>


<div className="flex items-center gap-4">
    <Link href="/" className="">Dashboard</Link>
    {/* THEMEMENU */}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={10}>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

{/* USERMENU */}
    
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
    <DropdownMenuItem variant="destructive">
        <LogOut className="mr-2 h-[1.5rem] w-[1.5rem]"/>
        Logout
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


{/* <DropdownMenu >
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon">

  <SquareMenu />
  <span className="sr-only">Open Menu</span>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu> */}



    </div>
        </nav>

    );
};

export default AppNavBar;