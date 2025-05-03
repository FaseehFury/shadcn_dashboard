"use client"
import {Home,Inbox,Calendar,Search,Settings, User2, ChevronUp, LogOut} from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "./sidebar";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuTrigger } from "./dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";


const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];

const AppSideBar = () => {
  const {theme} = useTheme();
  console.log(theme);
    return (
     
<Sidebar collapsible="icon">
  <SidebarHeader className="py-4">
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={20} height={20} />
          <span className="text-bold">Faseeh Dev</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
     
    </SidebarMenu>
  </SidebarHeader>
  <SidebarSeparator className="!w-auto"/>
  <SidebarContent>
  <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>
<SidebarMenu>
  <SidebarMenuItem>
    <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> John Doe <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
       <DropdownMenuContent align="end">
        <DropdownMenuItem>Account</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Sign Out</DropdownMenuItem>
       </DropdownMenuContent>
    </DropdownMenu>
    </SidebarMenuItem>
</SidebarMenu>
  </SidebarFooter>
</Sidebar>
       

    );
};

export default AppSideBar;