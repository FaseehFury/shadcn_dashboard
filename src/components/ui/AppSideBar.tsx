import {Home,Inbox,Calendar,Search,Settings, User2, ChevronUp} from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./sidebar";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuTrigger } from "./dropdown-menu";


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
    return (
        <div className="">
<Sidebar>
  <SidebarHeader>
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
  <SidebarContent>
  <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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

    </DropdownMenu>
    </SidebarMenuItem>
</SidebarMenu>
  </SidebarFooter>
</Sidebar>
        </div>

    );
};

export default AppSideBar;